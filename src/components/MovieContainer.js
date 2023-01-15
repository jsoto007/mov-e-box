import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Search from "./Search";

function MovieContainer( { movieData, setMovieData } ) {
  const [searchData, setSearchData] = useState("")

  function handleDeleteItem(deletedItem) {
    const updatedItems = movieData.filter((item) => item.id !== deletedItem.id)
    setMovieData(updatedItems);

  }

  const updatedDisplayItems = movieData.filter((item) => {
    return (
      item.title.toUpperCase().includes(searchData.toUpperCase())
    )
  })

    return (
        <div className="movie-container">
          <Search
            searchData={searchData}
            setSearchData={setSearchData}
          />
            {
              updatedDisplayItems.map((item) => {
                return (
                  <MovieCard 
                    onDeleteItem={handleDeleteItem}
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