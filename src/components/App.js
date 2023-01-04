import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import '../App.css';
import Header from "./Header"
import MovieContainer from './MovieContainer';
import NavBar from './NavBar';
import MovieInfo from "./MovieInfo"
import About from './About';
import NewMovieForm from './NewMovieForm';



function App() {
  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((resp)=> resp.json())
      .then((data) => setMovieData(data))
  }, [])

  function handleAddItem(newItem) {
    setMovieData([newItem, ...movieData])
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route  exact path="/movies/:id">
            <MovieInfo movieData={movieData} />
          </Route>
          <Route exact path="/movies">
            <MovieContainer movieData={movieData} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/add-movies">
            <NewMovieForm onAddItem={handleAddItem} />
          </Route>
        </Switch>
      
      </header>
    </div>
  );
}

export default App;
