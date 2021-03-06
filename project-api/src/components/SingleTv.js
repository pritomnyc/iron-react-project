import React, { useEffect, useState } from "react";
import axios from "axios";
import "../singleMovie.css";
const IMG_API = "https://image.tmdb.org/t/p/w300";

function SingleTv(props) {
  console.log(props);
  const [tv, setTv] = useState({});
  const [video, setVideo] = useState({});

  useEffect(() => {
    console.log("is use effect working?");
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${props.match.params.tvId}?api_key=892790fdb1ea1d1f1eead753a54cd422&language=en-US`
      )
      .then((res) => {
        console.log(res.data);
        setTv(res.data);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${props.match.params.tvId}/videos?api_key=892790fdb1ea1d1f1eead753a54cd422&language=en-US`
      )
      .then((res) => {
        console.log(res.data);
        setVideo(res.data.results);
      });
  }, []);

  //function to add tv show to favorites from single page
  const saveMovieList = async (tv) => {
    let res = await axios.post(
      `https://ironrest.herokuapp.com/mymovielist`,
      tv
    );
    console.log(res);
  };

  return (
    <div>
      {/* TypeError: Cannot read property 'key' of undefined */}

      <div className="singleMovieContainer">
        <div className="singleMovieFlex">
          <img src={IMG_API + tv.poster_path} alt="tv poster" />
        </div>
        <div className="singleDescription">
          <ul>
            <li>
              Title: <span style={{ color: `maroon` }}>{tv.name}</span>
            </li>
            <li>
              Score: <span style={{ color: `maroon` }}>{tv.vote_average}</span>
            </li>
            <li>
              Release Date:{" "}
              <span style={{ color: `maroon` }}>{tv.first_air_date}</span>
            </li>
            <li>
              Popularity:{" "}
              <span style={{ color: `maroon` }}>{tv.popularity}</span>
            </li>
            {/* <li>Network: {tv.networks[0].name}</li> */}
            <li>
              Seasons:{" "}
              <span style={{ color: `maroon` }}>{tv.number_of_seasons}</span>
            </li>
            <li>
              Type: <span style={{ color: `maroon` }}>{tv.type}</span>
            </li>
            <li>
              <button
                className="mylist-popbutton"
                onClick={() => saveMovieList(tv)}
              >
                ??? Add to favourites
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="singleOverview">
        <h1>Overview:</h1>
        <p>{tv.overview}</p>
      </div>
      <div className="youtubevideodiv">
        <iframe
          className="singleVideo"
          src={`https://www.youtube.com/embed/${video[0]?.key}`}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
      </div>
    </div>
  );
}

export default SingleTv;
