import React from "react";
import { NavLink } from "react-router-dom";

function MovieCard( { movieData } ) {
    const { id, title, poster} = movieData


    return (
            <div className="movie-card">
                    <li>{title}</li>
                <img src={poster} alt={title} />
                <br />
                <NavLink 
                  id="details"
                  to={`/movies/${id}`}
                >
                Movie Details
                </NavLink>
                {/* <button id="delete-btn" onClick={handleDeleteClick}>🗑️</button> */}
            </div>
    )
}

export default MovieCard;
