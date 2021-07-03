import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";

function Test() {
  let [gotHouses, setGotHouses] = useState([]);
  let [region, setRegion] = useState("");

  useEffect(async function () {
    let res = await axios.get(`https://anapioficeandfire.com/api/houses/378`);
    console.log(res.data);
    setGotHouses(res.data);
    //console.log(res.data);

    let res2 = await axios.get(`https://anapioficeandfire.com/api/houses/378`);
    setRegion(res2.data);
  }, []);

  // const ShowTheHouse = () => {
  //   return gotHouses.map((eachGotHouse) => {
  //     return (
  //       <div>
  //         <p>{eachGotHouse.name}</p>
  //         <p>{eachGotHouse.words}</p>
  //       </div>
  //     );
  //   });
  // };

  const saveTheHouse = async () => {
    let res2 = await axios.post(
      `https://anapioficeandfire.com/api/houses/378`,
      { gotHouses: region }
    );
  };

  return (
    <div className="App">
      <h1>Game of Thrones</h1>

      <div>
        {/* <ShowTheHouse /> */}
        {gotHouses.name}
      </div>
      <div>
        <button onClick={saveTheHouse}>Save the House</button>
      </div>
    </div>
  );
}

export default Test;
