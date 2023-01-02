import React from "react";
import About from "./About";

function MovieCard( { movieData } ) {
    const { title, year, genre, runtime, poster} = movieData

    return (
            <div>
                <img src={poster} alt={title} />
                <ul>Release: {year}</ul>
                <ul>Genre: {genre}</ul>
                <ul>Runtime: {runtime}</ul>
                <About 
                movieData={movieData}
                />
            </div>
    )
}

export default MovieCard;
