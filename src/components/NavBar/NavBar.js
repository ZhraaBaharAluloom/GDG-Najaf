import React, { useState } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import logo from "../../media/logo.png";

// Styles
import { NavBarStyle } from "./Styles";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <NavBarStyle>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            src={logo}
            style={{
              position: "absolute",
              width: 150,
              height: 55,
              top: 15,
              marginBottom: 30,
              float: "left",
            }}
            alt="logo"
          />
          <i className="fal fa-utensils-alt" />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/Home" className="nav-links" onClick={closeMobileMenu}>
              Home
              <i className="far fa-utensils-alt" />
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/team"
              className="nav-links"
              onClick={closeMobileMenu}
              onMouseOver="Hello"
            >
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
              <i className="far fa-utensils-alt" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </NavBarStyle>
  );
}

export default observer(Navbar);
