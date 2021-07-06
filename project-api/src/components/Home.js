import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  let [quote, setQuote] = useState({});
  let [API, setAPI] = useState({});

  //useEffect for GoT quote API
  useEffect(() => {
    console.log("is use effect working?");
    axios
      .get(`https://game-of-thrones-quotes.herokuapp.com/v1/random`)
      .then((res) => {
        setQuote(res.data);
        console.log(res.data);
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
        setAPI(res2.data);
        console.log(res2.data);
      });
  }, []);

  return (
    <div className="homePage">
      <div className="topOfHome">
        <h2>
          {/* GoT quotes on home page */}
          <i>{`"${quote.sentence}"`}</i> - {`${quote.character?.name}`}
        </h2>
      </div>

      <div className="dontKnowWhatToWatch">
        <h2>Don't Know What To Watch? Let Us Help 🙂</h2>
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
              <button className="spin">
                <b>Spin for Random</b>
              </button>
            </div>
          </div>
        </div>

        <div className="randomMoviePop">
          Spin for a random movie or TV show...
        </div>
      </section>

      <div className="belowFormDiv">
        <div className="doneWithRandom">
          <h2>
            If you don't want a random Movie or TV Show browse popular ones here
            👉
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
