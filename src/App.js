import React from "react";

// Components
import NavBar from "./components/NavBar/NavBar";
import Routes from "./components/Routes";

// Styles
import { InstagramIconStyle } from "./styles";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

function App() {
  return (
    <div>
      <NavBar />
      <Routes />
      <InstagramIconStyle className="row">
        <div className="col-12 col-md-2 col-lg-2">
          <p>Follow us on</p>
          <a
            href="https://instagram.com/gdgnajaf?igshid=1xmmrpow601ga"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare color="grey" size="20" />
          </a>
          <a
            href="/https://www.facebook.com/najafgdg/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoFacebook color="grey" size="24" />
          </a>
          <a
            href="/https://twitter.com/gdgnajaf?lang=ar"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitterSquare color="grey" size="21.5" />
          </a>
          <a
            href="https://www.linkedin.com/company/gdg-najaf/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoLinkedin color="grey" size="24" />
          </a>
        </div>
        <div className="col-12 col-md-10 col-lg-10">
          <p>Join us on our GDG platform to reach all our upcoming events 👇🏼</p>
          <a
            href="gdg.community.dev/gdg-najaf"
            target="_blank"
            rel="noreferrer"
          >
            gdg.community.dev/gdg-najaf
          </a>
        </div>
      </InstagramIconStyle>
    </div>
  );
}

export default App;
