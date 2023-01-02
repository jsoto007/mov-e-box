import React from "react";
import About from "./About";
import { NavLink } from "react-router-dom";

function MovieCard( { movieData } ) {
    const { id,title, year, genre, runtime, poster} = movieData

    return (
            <div>
                <img src={poster} alt={title} />
                <ul>Release: {year}</ul>
                <ul>Genre: {genre}</ul>
                <ul>Runtime: {runtime}</ul>
                <NavLink to={`/movies/${id}`}>
                Movie Info
                </NavLink>
            </div>
    )
}

export default MovieCard;
