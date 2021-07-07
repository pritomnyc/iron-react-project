import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/homeLogo.png";
import axios from "axios";

function Navbar(props) {
  //Search function starts
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnSubmit = () => {
    //condition of search from API
    if (searchTerm) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?&api_key=892790fdb1ea1d1f1eead753a54cd422&query=${searchTerm}`
        )
        .then((res) => {
          setSearchTerm(res.data.results);
          //console.log(res);
        });

      //setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  console.log(searchTerm);

  const submitSearch = (e) => {
    e.preventDefault();
    handleOnSubmit();
  };
  // //End of Search

  return (
    <div>
      <nav
        className="homeNav"
        style={{
          background: `linear-gradient(15deg, #13547a 0%, #80d0c7 100%)`,
          padding: `2em`,
          color: `black`,
        }}
        //#6495ed alternate color
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
          <form onSubmit={submitSearch}>
            <input
              className="search"
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleOnChange}
            />
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

//Search box functions

{
  /* <form onSubmit={handleOnSubmit}></form>
            <input
              className="search"
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleOnChange}
            /> */
}
