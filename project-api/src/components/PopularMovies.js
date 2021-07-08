import React, { useState, useEffect } from "react";
import axios from "axios";
import "../popmovies.css";
import { Link } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w300";

// api_key=892790fdb1ea1d1f1eead753a54cd422

function PopularMovies(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=892790fdb1ea1d1f1eead753a54cd422&page=1`
      )
      .then((res) => {
        console.log(res);
        setMovies(res.data.results);
      });
  }, []);
  console.log(movies);

  //Saving movie to my list
  const saveMovieList = async (movie) => {
    let res = await axios.post(
      `https://ironrest.herokuapp.com/mymovielist`,
      movie
    );
    console.log(res);
  };

  function ShowPopMovies() {
    return movies.map(({ id, title, poster_path, overview, vote_average }) => {
      return (
        <>
          <div className="movie-container">
            <div className="movie-img">
              <Link to={`/pop-movies/${id}`}>
                <img src={IMG_API + poster_path} alt={title} />
              </Link>
            </div>
            <div className="movieFlexDiv">
              <div className="movie-info">
                <h3>{title}</h3>
                <span>
                  <strong>{vote_average}</strong>
                </span>
              </div>
              <div className="movie-over">
                <h2 className="movie-overview">Overview:</h2>
                <p>{overview}</p>
              </div>

              <div className="mylist-button-poppage-div">
                <button
                  className="mylist-popbutton"
                  onClick={() =>
                    saveMovieList({
                      title,
                      poster_path,
                      overview,
                      vote_average,
                    })
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
      {/* PopularMovies */}
      <ShowPopMovies />
    </div>
  );
}

export default PopularMovies;

//   return (
//     <div>
//       {movies.length > 0 &&
//         movies.map((movie) => <PopularMovies key={movie.id} {...movie} />)}
//     </div>
//   );

// const IMG_API = "https://image.tmdb.org/t/p/w1280";
// const Movie =({title, poster_path,overview,vote_average})=>{
// return(<div className="movie">
//     <img src={IMG_API + poster_path} alt={title}/>
// </div>)
// }
