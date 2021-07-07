import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/homeLogo.png";

function Navbar(props) {
  return (
    <div>
      <nav
        className="homeNav"
        style={{
          background: `linear-gradient(15deg, #13547a 0%, #80d0c7 100%)`,
          padding: `2em`,
          color: `black`,
        }}
        //#6495ed
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
        <div className="searchNav">
          <input className="search" type="search" placeholder="Search..." />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
