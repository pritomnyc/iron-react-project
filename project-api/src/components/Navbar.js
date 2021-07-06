import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/homeLogo.png";

function Navbar(props) {
  return (
    <div>
      <nav
        className="homeNav"
        style={{ background: `#081118`, padding: `2em` }}
      >
        <div className="navLogoDiv">
          <Link to="/">
            <img src={Logo} alt="homeLogo" className="homeLogo" />
          </Link>
        </div>
        <div className="popularNav">
          <Link to="/pop-movies">Most Popular</Link>
        </div>
        <div className="myListNav">My List</div>
      </nav>
    </div>
  );
}

export default Navbar;
