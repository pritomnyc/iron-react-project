import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <Link to="/">
        <nav className="home" style={{ background: `#1DA1F2`, padding: `2em` }}>
          Logo
        </nav>
      </Link>
    </div>
  );
}

export default Navbar;
