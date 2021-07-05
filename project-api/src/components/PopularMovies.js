import React, { useState, useEffect } from "react";
import axios from "axios";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

function PopularMovies(props) {
  const [movies, setMovies] = useState([]);

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

  function ShowPopMovies({ title, poster_path, overview, vote_average }) {
    return movies.map((movie) => {
      return (
        <div className="movie">
          <img src={IMG_API + poster_path} alt={title} />
        </div>
      );
    });
  }

  //   return (
  //     <div>
  //       {movies.length > 0 &&
  //         movies.map((movie) => <PopularMovies key={movie.id} {...movie} />)}
  //     </div>
  //   );

  return (
    <div>
      PopularMovies
      <ShowPopMovies />
    </div>
  );
}

export default PopularMovies;

// const IMG_API = "https://image.tmdb.org/t/p/w1280";
// const Movie =({title, poster_path,overview,vote_average})=>{
// return(<div className="movie">
//     <img src={IMG_API + poster_path} alt={title}/>
// </div>)
// }
