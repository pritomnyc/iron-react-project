import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const IMG_API = "https://image.tmdb.org/t/p/w200";

function Home(props) {
  //useEffect for GoT quote API

  let [quote, setQuote] = useState({});

  useEffect(() => {
    axios
      .get(`https://game-of-thrones-quotes.herokuapp.com/v1/random`)
      .then((res) => {
        setQuote(res.data);
      });
  }, []);

  //useEffect for movie API

  let [movieAPI, setMovieAPI] = useState({});

  useEffect(() => {
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

  //useEffect for mylist button functionality
  const saveMovieList = async (movie) => {
    let res = await axios.post(
      `https://ironrest.herokuapp.com/mymovielist`,
      movie
    );
    console.log(res.data);
  };

  // Function to show random movie onClick

  let [movieType, setMovieType] = useState("movies");

  let [showMovie, setShowMovie] = useState(false);
  function ShowRandomMovie() {
    return (
      <>
        <div className="movie-container-home">
          <div className="movie-img-home">
            <Link to={`/pop-movies/${movieAPI.id}`}>
              <img src={IMG_API + movieAPI.poster_path} alt={movieAPI.title} />
            </Link>
          </div>
          <div className="movieFlexDiv-home">
            <div className="movie-info-home">
              <h3>{movieAPI.title}</h3>
              <h4>Score: {movieAPI.vote_average}</h4>
              <button
                className="mylist-popbutton-home"
                onClick={() => saveMovieList(movieAPI)}
              >
                ??? Add
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  //End of showRandomMovie Function

  //useEffect for random TV shows

  let [tvAPI, setTvAPI] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=892790fdb1ea1d1f1eead753a54cd422&page=1`
      )
      .then((res3) => {
        setTvAPI(res3.data.results);
        console.log(res3.data.results);

        let results = res3.data.results;
        let randomIndex = Math.floor(Math.random() * results.length);
        setTvAPI(results[randomIndex]);
        console.log(results[randomIndex]);
      });
  }, []);

  //Start of showRandomTVshow Function

  function ShowRandomTV() {
    return (
      <>
        <div className="movie-container-home">
          <div className="movie-img-home">
            <Link to={`/pop-tv/${tvAPI.id}`}>
              <img src={IMG_API + tvAPI.poster_path} alt={tvAPI.name} />
            </Link>
          </div>
          <div className="movieFlexDiv-home">
            <div className="movie-info-home">
              <h3>{tvAPI.name}</h3>
              <h4>Score: {tvAPI.vote_average}</h4>
              <button
                className="mylist-popbutton-home"
                onClick={() => saveMovieList(tvAPI)}
              >
                ??? Add
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  //end of click function for random tv

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
                <input
                  id="check"
                  type="radio"
                  name="filterByType"
                  checked
                  onChange={() => setMovieType("movies")}
                />
                Movies
                <input
                  id="check"
                  type="radio"
                  name="filterByType"
                  onChange={() => setMovieType("tv")}
                />
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
              <button className="spin" onClick={() => setShowMovie(true)}>
                <b>Spin for Random</b>
                {/* {!showMovie && <b>Spin for Random</b>} */}
              </button>
            </div>
          </div>
        </div>

        <div className="randomMoviePop">
          <div className="spinMovieInfo">
            {showMovie && movieType == "movies" ? <ShowRandomMovie /> : ""}
            {showMovie && movieType !== "movies" ? <ShowRandomTV /> : ""}
            {!showMovie && "Spin for a random Movie or TV Show..."}
          </div>
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
            <button className="browsePop">
              <strong>Browse Popular</strong>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
