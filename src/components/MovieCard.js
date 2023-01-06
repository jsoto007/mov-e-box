import React from "react";
import { NavLink } from "react-router-dom";

function MovieCard( { movieData } ) {
    const { id,title, year, genre, runtime, poster} = movieData

    function handleDeleteClick() {
        
    }
    return (
            <div className="movie-card">
              
                <img src={poster} alt={title} />
                <ul id="">
                    <li>Release: {year}</li>
                    <li>Genre: {genre}</li>
                    <li>Runtime: {runtime}</li>
                </ul>
                <NavLink to={`/movies/${id}`}>
                Movie Details
                </NavLink>
                <button id="delete-btn" onClick={handleDeleteClick}>🗑️</button>
            </div>
    )
}

export default MovieCard;
