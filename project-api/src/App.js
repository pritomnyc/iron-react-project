import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PopularMovies from "./components/PopularMovies";
import List from "./components/List";
import { Route, Switch } from "react-router-dom";
import PopularTv from "./components/PopularTv";
import SingleMovie from "./components/SingleMovie";
import SingleTv from "./components/SingleTv";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/pop-movies"
          render={(props) => <PopularMovies {...props} />}
        />
        <Route
          exact
          path="/pop-tv"
          render={(props) => <PopularTv {...props} />}
        />
        <Route exact path="/mylist" render={(props) => <List {...props} />} />
        <Route
          exact
          path="/pop-movies/:movieId"
          render={(props) => <SingleMovie {...props} />}
        />
        <Route
          exact
          path="/pop-tv/:tvId"
          render={(props) => <SingleTv {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;

// API stuff
// featured: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&
// api_key=https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=892790fdb1ea1d1f1eead753a54cd422&page=1&page=1"
// images: "https://image.tmdb.org/t/p/w1280"
// search: "https://api.themoviedb.org/3/search/movie?&
// api_key=892790fdb1ea1d1f1eead753a54cd422&query="
