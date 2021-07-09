import React, { useState } from "react";
import Logo from "../images/homeLogo.png";
import axios from "axios";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w200";

function Navbar(props) {
  //Search function starts
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showLinks, setShowLinks] = useState(false);
  const handleOnSubmit = () => {
    //condition of search from API
    if (searchTerm) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?&api_key=892790fdb1ea1d1f1eead753a54cd422&query=${searchTerm}`
        )
        .then((res) => {
          setSearchResults(res.data.results);
          //console.log(res);
        });

      //setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
    // handleOnSubmit();
  };
  console.log(searchTerm);

  const submitSearch = (e) => {
    e.preventDefault();
    handleOnSubmit();
  };
  // //End of Search

  function ShowSearch() {
    return searchResults.map(({ id, title, poster_path }) => {
      return (
        <div
          className="searchbackdiv"
          style={{
            backgroundColor: `rgba(255, 255, 255, 0.15)`,
            height: `27vh`,
            width: `18vw`,
            position: `relative`,
          }}
        >
          <div
            className="movie-container"
            style={{ display: `flex`, flexDirection: `column` }}
          >
            <div className="movie-img">
              <img src={IMG_API + poster_path} alt={title} />
            </div>
            <div>
              <Link to={`/pop-movies/${id}`}>
                <button className="detailsButton">Get Details</button>
              </Link>
            </div>
            {/* <div className="movieFlexDiv">
              <div className="movie-info">
                <h3>{title}</h3>
                <span>
                  <strong>{vote_average}</strong>
                </span>
              </div>
            </div> */}
          </div>
        </div>
      );
    });
  }

  // const searchNone = () => {
  //   <div className="searchbackdiv" style={{ display: `hidden` }}>
  //     <ShowSearch style={{ display: `hidden` }} />
  //   </div>;
  //   console.log(`is this working?`);
  // };

  return (
    <div className="Navbar">
      <div className="leftside">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <Link to="/">Home</Link>
          <Link to="/pop-movies">Movies</Link>
          <Link to="/pop-tv">TV-Show</Link>
          <Link to="/mylist">Favourites</Link>
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
          <SearchIcon onClick={submitSearch} />
        </button>
      </div>
      <div>
        <ShowSearch />
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
