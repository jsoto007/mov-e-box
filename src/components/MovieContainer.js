import React from "react";
import MovieCard from "./MovieCard";
import Search from "./Search";

function MovieContainer( { movieData } ) {

    return (
        <div className="movie-box">
          <Search />
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