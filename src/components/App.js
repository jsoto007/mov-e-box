import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from "./Header"

function App() {
  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((resp)=> resp.json())
      .then((data) => setMovieData(data))
  }, [])

  console.log()

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} alt="React Logo" />
      </header>
    </div>
  );
}

export default App;
