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
            </div>
    )
}

export default MovieCard;
