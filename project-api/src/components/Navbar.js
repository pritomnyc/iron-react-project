import React, { useState } from "react";
import Logo from "../images/homeLogo.png";
import axios from "axios";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";

function Navbar(props) {
  //Search function starts
  const [searchTerm, setSearchTerm] = useState("");
  const [showLinks, setShowLinks] = useState(false);
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
    <div className="Navbar">
      <div className="leftside">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="/">Home</a>
          <a href="/pop-movies">Movies</a>
          <a href="/pop-tv">TV-Show</a>
          <a href="/mylist">Favourites</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}>
          {""}
          <ReorderIcon />
        </button>
      </div>
      <div className="rightSide">
        <form onSubmit={submitSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
        <button>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

//Search box functions

//linear-gradient(15deg, #13547a 0%, #80d0c7 100%)

{
  /* <nav
        className="homeNav"
        style={{
          background: `#021E39`,
          width: `100%`,
          height: `80px`,
        }}
        //#6495ed alternate color
      >
        <div className="links">
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
      </nav> */
}
