import React from "react";
import MovieCard from "./MovieCard";

function MovieContainer( { movieData } ) {
    return (
        <div>
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