import React from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  const footerData = [
    {
      heading: "Sign up to Get Latest Updates",
      content: (
        <form className="d-flex flex-row mb-2 p-1 bg-white input-group">
          <input type="email" className="form-control rounded-0 border-0" placeholder="you@yoursite.com" />
          <button className="btn btn-secondary rounded-0 flex-shrink-0" type="submit">Subscribe</button>
        </form>
      ),
    },
    {
      heading: "LA STOLI JEWELS",
      links: [
        { label: "Home", href: "#/" },
        { label: " New Arrivals", href: "#/" },
        { label: "About Us", href: "#/" },
        { label: "Saving Schemes", href: "#/" },
        { label: "Order Tracking", href: "#/" },
        { label: "Contact us", href: "#/" },
      ],
    },
    {
      heading: "INFORMATION",
      links: [
        { label: "Disclaimer", href: "#/" },
        { label: "Privacy Policy", href: "#/" },
        { label: "Terms of Use", href: "#/" },
        { label: "Return Policy", href: "#/" },
        { label: "Shipping Policy", href: "#/" },
        { label: "FAQ", href: "#/" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "#/" },
        { label: "Careers", href: "#/" },
        { label: "Legal & Security", href: "#/" },
        { label: "Terms of use", href: "#/" },
        { label: "We're hiring!", href: "#/" },
      ],
    },
    {
      heading: "Company",
      blogPosts: [
        { date: "29 March 2021", title: "Markdown Language Sample Blog Post Styling", image: "https://bootdey.com/img/Content/avatar/avatar1.png", link: "#/" },
        { date: "29 March 2021", title: "Markdown Language Sample Blog Post Styling", image: "https://bootdey.com/img/Content/avatar/avatar2.png", link: "#/" },
      ],
    },
  ];
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossOrigin="anonymous" />
      <footer className="bg-dark-gradient footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-border-bottom pb-6 mb-5">
              <div className="row">
                {footerData.map((section, index) => (
                  <div className="col-lg-4 col-xl-3" key={index}>
                    {section.heading && <h4 className="text-white">{section.heading}</h4>}
                    {section.content}
                    {section.links && (
                      <ul className="list-unstyled white-link footer-links">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a href={link.href}>{link.label}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.blogPosts && (
                      <div className="white-link">
                        {section.blogPosts.map((post, postIndex) => (
                          <div className="d-flex pb-3" key={postIndex}>
                            <div className="avatar avatar-lg rounded">
                              <img src={post.image} title="" alt="" />
                            </div>
                            <div className="col ps-3">
                              <small className="text-white-65">{post.date}</small>
                              <h6 className="font-w-500 h6 m-0"><a className="text-white" href={post.link}>{post.title}</a></h6>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="footer-bottom footer-border-top light py-3">
              <div className="container text-center">
                <p className="m-0">© 2023 copyright <NavLink to='https://www.travelomedia.co.in/' className="text-reset text-white">travelomedia</NavLink></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
