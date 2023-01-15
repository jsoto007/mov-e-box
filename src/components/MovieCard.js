import React from "react";
import { NavLink } from "react-router-dom";

function MovieCard( { movieData, onDeleteItem } ) {
    const { id, title, poster} = movieData

    function handleDeleteClick() {
      fetch(`http://localhost:3002/movies/${id}`, 
      {
        method: "DELETE",
      })
        .then((resp) => resp.json)
        .then(()=> onDeleteItem(movieData))

    }

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
                <button  onClick={handleDeleteClick}>
                  <span 
                  area-aria-labelledby="Delete"
                  role="img">
                  🗑️
                  </span>
                  </button>
            </div>
    )
}

export default MovieCard;
