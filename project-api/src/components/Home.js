import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const IMG_API = "https://image.tmdb.org/t/p/w200";

function Home(props) {
  let [quote, setQuote] = useState({});
  let [movieAPI, setMovieAPI] = useState({});

  //useEffect for GoT quote API
  useEffect(() => {
    axios
      .get(`https://game-of-thrones-quotes.herokuapp.com/v1/random`)
      .then((res) => {
        setQuote(res.data);
      });
  }, []);

  //useEffect for big movie/tv show API
  useEffect(() => {
    console.log("is the new effect working ?");
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=892790fdb1ea1d1f1eead753a54cd422&language=en-US&page=1`
      )
      .then((res2) => {
        setMovieAPI(res2.data.results);
        console.log(res2.data.results);

        let results = res2.data.results;
        let randomIndex = Math.floor(Math.random() * results.length);
        setMovieAPI(results[randomIndex]);
        console.log(results[randomIndex]);
      });
  }, []);

  // Function to show random movie onClick
  function ShowRandomMovie() {
    // return movieAPI.map(() => {
    return (
      <>
        <div className="movie-container-home">
          <div className="movie-img-home">
            <img src={IMG_API + movieAPI.poster_path} alt={movieAPI.title} />
          </div>
          <div className="movieFlexDiv-home">
            <div className="movie-info-home">
              <h3>{movieAPI.title}</h3>
              <p>Score: {movieAPI.vote_average}</p>
              <button className="mylist-popbutton-home">+ My List</button>
            </div>
          </div>
        </div>
      </>
    );
  }
  //End of showRandomMovie Function

  // Return statement for entire page
  return (
    <div className="homePage">
      <div className="topOfHome">
        <h2>
          {/* GoT quotes on home page */}
          <i>{`"${quote.sentence}"`}</i> - {`${quote.character?.name}`}
        </h2>
      </div>

      <div className="dontKnowWhatToWatch">
        <h2>Don't Know What To Watch? Let Us Help.</h2>
        <p>
          If you're having trouble picking a movie or show to watch hit the{" "}
          <i>spin</i> button below and let us decide.
        </p>
      </div>

      <section className="spin-formBoxSection">
        <div className="spinFormBigDiv">
          <div className="typefilterDiv">
            <form>
              <label htmlFor="check">
                Type:
                <input id="check" type="checkbox" name="filterByTypeMovies" />
                Movies
                <input id="check" type="checkbox" name="filterByTypeTvShows" />
                TV Shows
              </label>
            </form>
          </div>
          <div className="flexGenre">
            <div className="genre">Genre:</div>
            <div className="genreButtonDiv">
              <button className="genreButton">All Genres</button>
            </div>
          </div>
          <div className="filterByScoreDiv">
            <div className="scorefilter">Score:</div>
            <button className="filterByScore">All Scores</button>
          </div>
          <div className="randomButtonDiv">
            <div className="spinButton">
              <button className="spin" onClick={ShowRandomMovie}>
                <b>Spin for Random</b>
              </button>
            </div>
          </div>
        </div>

        <div className="randomMoviePop">
          <div className="spinMovieInfo">
            <ShowRandomMovie />
          </div>
          Spin for a random movie or TV show...
        </div>
      </section>

      <div className="belowFormDiv">
        <div className="doneWithRandom">
          <h2>
            If you don't want a random Movie or TV Show browse popular ones here
          </h2>
        </div>

        <div className="browsePopButtonDiv">
          <Link to="/pop-movies">
            <button className="browsePop">Browse Popular</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
