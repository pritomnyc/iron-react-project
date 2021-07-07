import React, { useState, useEffect } from "react";
import axios from "axios";
import "../list.css";
const IMG_API = "https://image.tmdb.org/t/p/w300";

function List(props) {
  let [movieList, setMovieList] = useState([]);

  useEffect(async function () {
    console.log("is this working?");
    let res = await axios.get(`https://ironrest.herokuapp.com/mymovielist`);
    setMovieList(res.data);
    console.log(res.data);
  }, []);

  // function ShowMyMovies({ title, poster_path, overview, vote_average }) {
  //   // return movieList.map(({ title, poster_path, overview, vote_average }) => {
  //   return (
  //     <>
  //       <div className="movie-container">
  //         <div className="movie-img">
  //           <img src={IMG_API + poster_path} alt={title} />
  //         </div>
  //         <div className="movieFlexDiv">
  //           <div className="movie-info">
  //             <h3>{title}</h3>
  //             <span>
  //               <strong>{vote_average}</strong>
  //             </span>
  //           </div>
  //           <div className="movie-over">
  //             <h2 className="movie-overview">Overview:</h2>
  //             <p>{overview}</p>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  // let [list, setList] = useState(movieList);

  async function DeleteList(i) {
    let copyOfList = [...movieList];
    let res = await axios.delete(
      `https://ironrest.herokuapp.com/mymovielist/${copyOfList[i]?._id}`
    );
    copyOfList.splice(i, 1);
    setMovieList(copyOfList);
    console.log("hello,i", i);
  }

  const ShowMyMovies = () => {
    return movieList.map((eachMovie, i) => {
      return (
        <>
          <div className="movie-container">
            <div className="movie-img">
              <img
                src={IMG_API + eachMovie.poster_path}
                alt={eachMovie.title}
              />
            </div>
            <div className="movieFlexDiv">
              <div className="movie-info">
                <h3>{eachMovie.title}</h3>
                <span>
                  <strong>{eachMovie.vote_average}</strong>
                </span>
              </div>
              <div className="movie-over">
                <h2 className="movie-overview">Overview:</h2>
                <p>{eachMovie.overview}</p>
              </div>
              <div className="deleteButtonDiv">
                <button className="deleteButton" onClick={() => DeleteList(i)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <div>
      <ShowMyMovies />
    </div>
  );
}

export default List;
