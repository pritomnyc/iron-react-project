import React, { useState, useEffect } from "react";
import axios from "axios";

function List(props) {
  let [movieList, setMovieList] = useState([]);

  useEffect(async function () {
    let res = await axios.get(``);
    setMovieList(res.results);
  }, []);

  const saveMovieList = async () => {
    let res = await axios.post(`https://ironrest.herokuapp.com/`);
  };

  return <div></div>;
}

export default List;
