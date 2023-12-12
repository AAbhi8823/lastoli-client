import React, { useState,useEffect } from "react";
import "./NavBar.css";
import LastoliLogo from "../../../Image/lastolilogo.png";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import SignIn from "../LoginAndLogo/Login/SignIn";
export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null); 
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [signInPopup, setSignInPopup] = useState(false)

  const updateSearch = (event) => {
    setSearchData(event.target.value);
  };
  const handleOutsideClick = (event) => {
    const loginPopupElement = document.getElementById('login-popup');
    if (signInPopup && loginPopupElement && !loginPopupElement.contains(event.target)) {
      setSignInPopup(false);
      document.body.classList.remove("inactive-background");
    }
  };
  
  
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [signInPopup]);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item); 
    setShowSubmenu(true)
  };

  const handleMouseLeave = () => {
    setHoveredItem(null); 
    setShowSubmenu(false)
  };

  const handleDropdownClick = (item) => {
    console.log(`Clicked on "${item.label}"`);
  };

  const menuItems = [
    {
      label: "Woman",
      hasDropdown: false,
      path: "Woman",
      subelement: ["one", "two",'three'],
    },
    {
      label: "Man",
      hasDropdown: false,
      path: "Man",
      subelement: ["one", "two"],
    },
    {
      label: "925 Silver",
      hasDropdown: false,
      path: "Silver",
      subelement: ["one", "two"],
    },
    {
      label: "collection",
      hasDropdown: false,
      path: "collection",
      subelement: ["one", "two"],
    },
    {
      label: "Best Seller",
      hasDropdown: false,
      path: "BestSeller",
      subelement: ["one", "two"],
    },
    {
      label: "More",
      hasDropdown: false,
      path: "More",
      subelement: ["Order details", "two"],
    },
    {
      label: "Contact Us",
      hasDropdown: false,
      path: "ContactUs",
      subelement: ["one", "two"],
    },
  ];
  const openSignInPopup = () => {
    setSignInPopup(true);
    document.body.classList.add("inactive-background");
  };

  const closeSignInPopup = () => {
    setSignInPopup(false);
    document.body.classList.remove("inactive-background");
  };

  return (
    <div className="top-navbar">
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <ul className={`ul-menu ${menuOpen ? "open" : ""}`}>
          <NavLink to="/Dashbord">
            <img
              style={{ height: "5vh", width: "5vw" }}
              src={LastoliLogo}
              alt="Logo image"
            />
          </NavLink>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
              className={`ul-li-menu ${menuOpen ? "open" : ""}`}
            >
              <NavLink
                to={item.path}
                onClick={() => {
                  if (item.hasDropdown) {
                    handleDropdownClick(item);
                  }
                }}
              >
                {item.label}
              </NavLink>
                <ul className={`navsub-element ${menuOpen ? "open" : ""}`}>
                  {item.subelement.map((subItem, subIndex) => (
                    <li className="sub-element" key={subIndex}><NavLink to='/OrderDetails'>{subItem}</NavLink></li>
                  ))}
                </ul>
            </li>
          ))}
          <form className={`menusearch ${menuOpen ? "openn" : ""}`}>
            <button type="submit">Search</button>
            <input
              type="search"
              placeholder="Search..."
              value={searchData}
              onChange={updateSearch}
            />
          </form>
          <div className={`rightallicon ${menuOpen ? "open" : ""}`}>
            <button  onClick={openSignInPopup}>
              <BiUserCircle />
            </button>
            <NavLink to="Wishlist">
              <AiOutlineHeart />
            </NavLink>
            <NavLink to="PaymentMethods">
              <BsBag />
            </NavLink>
            {signInPopup && <SignIn onClose={closeSignInPopup} />}
          </div>
        </ul>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}
