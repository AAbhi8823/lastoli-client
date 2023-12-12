import React, { useEffect, useState } from "react";
import "./Dashbord.css";
import ImageSlider from "../ImageSlider/ImageSlider";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Promotionbanner from "../../../Image/promotionbanner.png";
import { useNavigate } from "react-router-dom";
import ItemImage from "../../../Image/Rectangleitem1.png";
import SignIn from "../../TopNavBar/LoginAndLogo/Login/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";
import { base_url } from "../../../Utils/baseUrl";
const sections = [
  "New Arrivals",
  "Best Seller",
  "Shop By Category",
  "Shop By Collection",
  "Shop By Occasion",
  "Customer Review",
];

export default function Dashbord() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [itemData, setItemData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [signInPopup, setSignInPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userIsAuthenticated = true;
    setIsAuthenticated(userIsAuthenticated);

    fetch(`${base_url}/v1/product/get-all-products`)
      .then((response) => response.json())
      .then((data) => {
        setItemData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const closeSignInPopup = () => {
    if (document.body.classList.contains("inactive-background")) {
      document.body.classList.remove("inactive-background");
    }
    setSignInPopup(false);
  };

  const openSignInPopup = () => {
    document.body.classList.add("inactive-background");
    setSignInPopup(true);
  };

  // ...
  // Trigger the login popup with openSignInPopup function

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="dashbord">
      <ImageSlider />
      {sections.map((section) => (
        <Section
          key={section}
          title={section}
          itemData={itemData}
          wishlist={wishlist}
          setWishlist={setWishlist}
          isAuthenticated={isAuthenticated}
          setSignInPopup={setSignInPopup}
        />
      ))}
      <div className="new-arivale">
        <NavLink className="PromotionBanner-link" to="/PromotionBanner">
          <img src={Promotionbanner} alt="Promotion Banner" />
        </NavLink>
      </div>
      <div className="shell-section">
        <p>Flat 15% OFF on orders above 3500! Code: LOVE</p>
      </div>
      {signInPopup && <SignIn onClose={closeSignInPopup} />}
    </div>
  );
}

function Section({
  title,
  itemData,
  wishlist,
  setWishlist,
  isAuthenticated,
  setSignInPopup,
}) {
  if (!itemData || !itemData.data) {
    return null;
  }

  // const products = [
  //   {
  //     id: 1,
  //     price: 10,
  //     category: "Category 1",
  //     name: "Product 1",
  //     description: "Many desktop publishing packages and web page editors now.",
  //   },
  //   {
  //     id: 2,
  //     price: 10,
  //     category: "Category 2",
  //     name: "Product 2",
  //     description: "Many desktop publishing packages and web page editors now.",
  //   },
  //   {
  //     id: 3,
  //     price: 10,
  //     category: "Category 3",
  //     name: "Product 3",
  //     description: "Many desktop publishing packages and web page editors now.",
  //   },
  //   {
  //     id: 4,
  //     price: 10,
  //     category: "Category 4",
  //     name: "Product 4",
  //     description: "Many desktop publishing packages and web page editors now.",
  //   },
  // ];
  const itemsToShow = itemData.data.slice(0, 5);

  return (
    <div className="new-arivale" key={title.replace(/\s/g, "")}>
      <div className="new-arivale-image">
        <h2>{title}</h2>

        <div className="item-list-newarivale">
          {itemsToShow.map((item, itemIndex) => (
            <ProductItem
              key={itemIndex}
              imageSrc={item.thumbnail_image}
              price={item.price}
              likes={item.likes}
              title={item.product_name}
              itemId={item._id}
              wishlist={wishlist}
              setWishlist={setWishlist}
              isAuthenticated={isAuthenticated}
              setSignInPopup={setSignInPopup} 
            />
          ))}
        </div>
        <div className="item-navigatebutom">
          <NavLink to={`/${title.replace(/\s/g, "")}`}>
            <button>Click me</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

function ProductItem({
  imageSrc,
  price,
  likes,
  title,
  itemId,
  wishlist,
  setWishlist,
  isAuthenticated,
  setSignInPopup,
}) {
  const [disableNavigation, setDisableNavigation] = useState(false);
  const [likeButtonClicked, setLikeButtonClicked] = useState(false);
  const navigate = useNavigate();

  const handleLikeClick = (event) => {
    event.preventDefault();

    if (isAuthenticated) {
      const newItem = { itemId, title, price, likes };
      setWishlist([...wishlist, newItem]);

      fetch(`${base_url}/v1/wishlist/add-wishlist`, {
        method: "POST",
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1Yzc4Zjc1ZGFjOTQ1MjVjYjllNWZkIiwibmFtZSI6IkFiaGlzaGVrIEt1bWFyIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MDA3NDA1OTcsImV4cCI6MTcwMzMzMjU5N30.V_5rc0lgqdNDVCk7Tr5TDYBN8BuuAYb_bk-vfK5aAFk",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Item added to the wishlist:", data);
        })
        .catch((error) => {
          if (error.message === "Not Authorized!") {
            navigate("/signin");
          } else {
            console.error("Error adding item to wishlist:", error);
          }
        });
    } else {
      setSignInPopup(true);
      console.error("User not authenticated. Please handle this case.");
    }
  };

  return (
    <NavLink
      className="item-list-newarivale-single"
      to={`/item/${itemId}`}
      onClick={(event) => disableNavigation && event.preventDefault()}
    >
      <img src={imageSrc} alt="item image" />
      <div className="item-contener-price">
        <div className="item-priceing-name">
          <p>
            {price} <span>{likes}</span>
          </p>
          <p>{title}</p>
        </div>
        <div
          className="item-likebutton"
          onMouseEnter={() => setDisableNavigation(true)}
          onMouseLeave={() => setDisableNavigation(false)}
        >
          <AiOutlineHeart
            onClick={handleLikeClick}
            className={likeButtonClicked ? "liked" : ""}
          />
        </div>
      </div>
    </NavLink>
  );
}
