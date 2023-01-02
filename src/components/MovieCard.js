import React from "react";
import About from "./About";

function MovieCard( { movieData } ) {
    const { title, year, genre, runtime, poster} = movieData
    console.log(poster)
    return (
        <li>
            <div>
                <img src={poster} alt={title} />
                <ul>Release: {year}</ul>
                <ul>Genre: {genre}</ul>
                <ul>Runtime: {runtime}</ul>
                <About 
                movieData={movieData}
                />

            </div>
        </li>
    )
}

export default MovieCard;
