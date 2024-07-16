import React from "react";
import "./Header.css";
import {
  BsFillHouseDoorFill,
  BsFillInfoCircleFill,
  BsFillPeopleFill,
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsFillTwitterFill,
  BsFillInstagramFill,
  BsFillFacebookFill,
  BsFillPinterestFill,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-left">
            <div className="header-top-item">
              <BsFillHouseDoorFill />
              <address>Sector 33, Gurugram, Haryana, India</address>
            </div>
            <div className="header-top-item">
              <BsFillTelephoneFill />
              <span>+91 9622136263</span>
            </div>
            <div className="header-top-item">
              <BsFillEnvelopeFill />
              <a href="mailto:cozycorner@gmail.com">cozycorner@gmail.com</a>
            </div>
          </div>
          <div className="header-top-right">
            <a href="#" className="btn header-top-btn">
              Add Listing
            </a>
            <a href="#" className="btn header-top-btn">
              Signup/Login
            </a>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="header-bottom-left">
            <a href="#" className="logo">
              <img src="assets/icons8-cc.gif" alt="Cozy Corner logo" />
            </a>
            <h1 id="name">Cozy Corner</h1>
          </div>
          <nav className="header-bottom-right">
            <ul className="header-nav">
              <li className="header-nav-item">
                <a href="#home" className="header-nav-link">
                  Home
                </a>
              </li>
              <li className="header-nav-item">
                <a href="#about" className="header-nav-link">
                  About
                </a>
              </li>
              <li className="header-nav-item">
                <a href="#service" className="header-nav-link">
                  Service
                </a>
              </li>
              <li className="header-nav-item">
                <a href="#property" className="header-nav-link">
                  Property
                </a>
              </li>
              <li className="header-nav-item">
                <a href="#blog" className="header-nav-link">
                  Blog
                </a>
              </li>
              <li className="header-nav-item">
                <a href="#contact" className="header-nav-link">
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
