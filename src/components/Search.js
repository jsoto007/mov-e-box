import React from "react";

function Search() {

  function handleSubmit(e) {
    e.preventDefualt();
  }
    return (
        <form className="search-bar" onSubmit={handleSubmit}>
          <input 
            type="text"
            id="search"
            placeholder="Search by movie name..."
            value="search..."
            
          />
          <button type="submit">👀</button>
        </form>
    )
}

export default Search;