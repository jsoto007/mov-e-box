import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Search from "./Search";

function MovieContainer( { movieData } ) {
  const [searchData, setSearchData] = useState("")

  const updatedDisplayItems = movieData.filter((item) => {
    return (
      item.title.toUpperCase().includes(searchData.toUpperCase())
    )
  })

    return (
        <div className="movie-box">
          <Search
            searchData={searchData}
            setSearchData={setSearchData}
          />
            {
              updatedDisplayItems.map((item) => {
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