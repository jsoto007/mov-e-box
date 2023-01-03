import React from "react";
import MovieCard from "./MovieCard";

function MovieContainer( { movieData } ) {
    return (
        <div class="movie-box">
            {
                movieData.map((item) => {
                    return (
                        <MovieCard 
                        movieData={item}
                        key={item.id}
                        />

                    )
                })  
            }
            
        </div>
    )
}

export default MovieContainer;