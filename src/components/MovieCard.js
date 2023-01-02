import React from "react";

function MovieCard( { movieData } ) {
    const { title, year, genre, runtime, poster} = movieData
    return (
        <li>
            <div>
                <img src={poster} alt={title} />

            </div>
        </li>
    )
}

export default MovieCard;
