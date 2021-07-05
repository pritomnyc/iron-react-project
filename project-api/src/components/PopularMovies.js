import React, { useState, useEffect } from "react";
import axios from "axios";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

function PopularMovies(props) {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=892790fdb1ea1d1f1eead753a54cd422&page=1`
      )
      .then((res) => {
        setMovies(res.results);
      });
  }, []);
  console.log(movies);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?&api_key=892790fdb1ea1d1f1eead753a54cd422&query=` //how to add searchTerm here
        )
        .then((res) => {
          setMovies(res.results);
        });

      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  function ShowPopMovies({ title, poster_path, overview, vote_average }) {
    return (
      //movies.length > 0 &&
      movies.map((movie) => {
        return (
          <>
            <header className="pop-header">
              <form onSubmit={handleOnSubmit}></form>
              <input
                className="search"
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleOnChange}
              />
            </header>
            <div className="movie-container">
              <div className="movie-img">
                <img src={IMG_API + { poster_path }} alt={title} />
              </div>
              <div className="movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
              </div>
              <div className="movie-over">
                <h2>Overview:</h2>
                <p>{overview}</p>
              </div>
            </div>
          </>
        );
      })
    );
  }

  return (
    <div>
      PopularMovies
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