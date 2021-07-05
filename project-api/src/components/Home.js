import React from "react";

function Home() {
  return (
    <div className="homePage">
      <div className="topOfHome">
        <nav>this is where the nav bar will be</nav>
        <h2>This is where a random movie quote will go</h2>
      </div>

      <div className="spin-formBoxDiv">
        <div className="typefilterDiv">
          <form>
            <label for="check">
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
          <button className="filterByScore">Score</button>
        </div>
        <div className="randomButtonDiv">
          <div className="spinButton">
            <button className="spin">Spin for Random</button>
          </div>
        </div>
      </div>

      <div className="belowFormDiv">
        <div className="doneWithRandom">
          <h2>
            If you don't want a random movie or TV Show browse popular ones here
          </h2>
        </div>

        <div className="browsePopButton">
          <button className="browsePop">Browse Popular</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
