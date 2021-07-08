import React, { useEffect, useState } from "react";
import axios from "axios";
const IMG_API = "https://image.tmdb.org/t/p/w300";

function SingleMovie(props) {
  console.log(props);
  const [film, setFilm] = useState([]);

  useEffect(() => {
    console.log("is use effect working?");
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=892790fdb1ea1d1f1eead753a54cd422&page=1/${props.match.params._id}`
      )
      .then((res) => {
        setFilm(res.data.results);
        console.log(res.data.results);
      });
  }, []);

  return (
    <div>
      {film.title}
      {film.overview}
    </div>
  );
}

export default SingleMovie;
