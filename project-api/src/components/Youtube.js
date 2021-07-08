import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Youtube(props) {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/{283552}/videos?api_key=892790fdb1ea1d1f1eead753a54cd422&language=en-US`
      )
      .then((res) => {
        setVideo(res.results);
        console.log(res.results);
      });
  }, []);

  const ShowVideos = () => {
    return video.map(({ name }) => {
      return <div>{name}</div>;
    });
  };

  return (
    <div>
      <ShowVideos />
    </div>
  );
}

export default Youtube;
