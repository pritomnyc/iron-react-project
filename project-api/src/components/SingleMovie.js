import React, { useEffect, useState } from "react";
import axios from "axios";
// const IMG_API = "https://image.tmdb.org/t/p/w300";

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

  return (
    <div>
      hello?
      {/* <iframe
        src={`https://www.youtube.com/embed/${video[0].key}`}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      /> */}
    </div>
  );
}

export default SingleMovie;
