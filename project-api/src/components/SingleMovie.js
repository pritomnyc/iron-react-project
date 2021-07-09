import React, { useEffect, useState } from "react";
import axios from "axios";
import "../singleMovie.css";
const IMG_API = "https://image.tmdb.org/t/p/w300";

function SingleMovie(props) {
  console.log(props);
  const [film, setFilm] = useState({});
  const [video, setVideo] = useState({});

  useEffect(() => {
    console.log("is use effect working?");
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.match.params.movieId}?api_key=892790fdb1ea1d1f1eead753a54cd422&language=en-US`
      )
      .then((res) => {
        console.log(res.data);
        setFilm(res.data);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.match.params.movieId}/videos?api_key=892790fdb1ea1d1f1eead753a54cd422&language=en-US`
      )
      .then((res) => {
        console.log(res.data);
        setVideo(res.data.results);
      });
  }, []);

  //function to add movie to favorites from single page
  const saveMovieList = async (movie) => {
    let res = await axios.post(
      `https://ironrest.herokuapp.com/mymovielist`,
      movie
    );
    console.log(res);
  };

  return (
    <div>
      {/* TypeError: Cannot read property 'key' of undefined */}
      {/* <div className="youtubevideodiv">
        <iframe
          className="singleVideo"
          src={`https://www.youtube.com/embed/${video[0].key}`}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
      </div> */}
      <div className="singleMovieContainer">
        <div className="singleMovieFlex">
          <img src={IMG_API + film.poster_path} alt="film poster" />
        </div>
        <div className="singleDescription">
          <ul>
            <li>Title: {film.title}</li>
            <li>Score: {film.vote_average}</li>
            <li>Release Date: {film.release_date}</li>
            <li>Popularity: {film.popularity}</li>
            <li>Box Office: {film.revenue}</li>
            <li>Runtime: {film.runtime}</li>
            <li>
              <button
                className="mylist-popbutton"
                onClick={() => saveMovieList(film)}
              >
                ➕ Add to favourites
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="singleOverview">
        <h1>Overview:</h1>
        <p>{film.overview}</p>
      </div>
    </div>
  );
}

export default SingleMovie;
