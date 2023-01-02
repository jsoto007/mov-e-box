import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import '../App.css';
import Header from "./Header"
import MovieCard from './MovieCard';
import MovieContainer from './MovieContainer';
import NavBar from './NavBar';

function App() {
  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((resp)=> resp.json())
      .then((data) => setMovieData(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route exact path="/movies">
            <MovieContainer movieData={movieData} />
          </Route>
        </Switch>
      
      </header>
    </div>
  );
}

export default App;
