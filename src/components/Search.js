import React from "react";

function Search( { searchData, setSearchData } ) {

  function handleSubmit(e) {
    e.preventDefualt();
  }
    return (
        <form className="search-bar" onSubmit={handleSubmit}>
          <input 
            type="text"
            id="search"
            placeholder="movie name..."
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
          <button type="submit">👀</button>
        </form>
    )
}

export default Search;