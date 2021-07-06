import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/homeLogo.png";

function Navbar(props) {
  return (
    <div>
      <nav
        className="homeNav"
        style={{ background: `#6495ed`, padding: `2em` }}
      >
        <div className="navLogoDiv">
          <Link to="/">
            <img src={Logo} alt="homeLogo" className="homeLogo" />
          </Link>
        </div>
        <div className="popularNav">
          <Link to="/pop-movies">Popular Movies</Link>
        </div>
        <div className="populartvNav">
          <Link to="/pop-tv">Popular TV Shows</Link>
        </div>
        <div className="myListNav">
          <Link to="/mylist">My List</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
