//API stuff
//https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=892790fdb1ea1d1f1eead753a54cd422&page=1
//IMG_API: https://image.tmdb.org/t/p/w300
//api_key: 892790fdb1ea1d1f1eead753a54cd422

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../poptv.css";
const IMG_API = "https://image.tmdb.org/t/p/w300";

function PopularTv(props) {
  const [tvShow, setTvShow] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=892790fdb1ea1d1f1eead753a54cd422&page=1`
      )
      .then((res) => {
        console.log(res);
        setTvShow(res.data.results);
      });
  }, []);
  console.log(tvShow);

  //Saving tv shows to my list
  //Saving movie to my list
  const saveTvList = async (tvShow) => {
    let res = await axios.post(
      `https://ironrest.herokuapp.com/mymovielist`,
      tvShow
    );
    console.log(res);
  };

  function ShowTvShow() {
    return tvShow.map(({ name, poster_path, overview, vote_average }) => {
      return (
        <>
          <div className="tv-container">
            <div className="tv-img">
              <img src={IMG_API + poster_path} alt={name} />
            </div>
            <div className="tvFlexDiv">
              <div className="tv-info">
                <h3>{name}</h3>
                <span>
                  <strong>{vote_average}</strong>
                </span>
              </div>
              <div className="tv-over">
                <h3 className="tv-overview">Overview:</h3>
                <p>{overview}</p>
              </div>

              <div className="mylist-button-poppage-div">
                <button
                  className="mylist-popbutton"
                  onclick={() =>
                    saveTvList({ name, poster_path, overview, vote_average })
                  }
                >
                  ➕ Add to favourites
                </button>
              </div>
            </div>
          </div>
        </>
      );
    });
  }

  return (
    <div>
      <ShowTvShow />
    </div>
  );
}

export default PopularTv;
