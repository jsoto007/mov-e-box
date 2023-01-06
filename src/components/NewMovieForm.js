import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function NewMovieForm( { onAddItem } ) {
    const [formData, setFormData] = useState({
        title: "",
        poster: "",
        released: "", 
        rated: "",
        runtime: "",
        genre: "",
        director: "",
        writer: "",
        actors: "",
        plot: "", 
        language: "",
        awards: "",
        type: ""
    })

    const history = useHistory();

    function handleSubmit(e) {
      e.preventDefault();

      fetch("http://localhost:3002/movies", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
      })
      .then((resp) => resp.json())
      .then((newItem) => {
         onAddItem(newItem)
         history.push(`movies/${newItem.id}`)
      })
    }

    function handleChange(e) {
      const key = e.target.id
      setFormData({
         ...formData,
         [key]: e.target.value
      })
    }
    return (
        <div>
         <h2>New Movies</h2>
         <form onSubmit={handleSubmit}>
            <input 
               type="text"
               name="title"
               className="movie-form"
               id="title"
               value={formData.title}
               onChange={handleChange}
               placeholder="Movie Name"
            />
             <input 
               type="text"
               name="poster"
               id="poster"
               className="movie-form"
               value={formData.poster}
               onChange={handleChange}
               placeholder="Poster URL"
            />
             <input 
               type="text"
               name="released"
               id="released"
               className="movie-form"
               value={formData.released}
               onChange={handleChange}
               placeholder="Release Date"
            />
            <h3>Additonal Informaiton (obtional)</h3>
             <input 
               type="text"
               name="rated"
               id="rated"
               className="movie-form"
               value={formData.rated}
               onChange={handleChange}
               placeholder="Rated"
            />
              <input 
               type="text"
               name="runtime"
               id="runtime"
               className="movie-form"
               value={formData.runtime}
               onChange={handleChange}
               placeholder="Runtime"
            />
               <input 
               type="text"
               name="genre"
               id="genre"
               className="movie-form"
               value={formData.genre}
               onChange={handleChange}
               placeholder="Genre"
            />
            <input 
               type="text"
               name="director"
               id="director"
               className="movie-form"
               value={formData.director}
               onChange={handleChange}
               placeholder="Director"
            />
            <input 
               type="text"
               name="writer"
               id="writer"
               className="movie-form"
               value={formData.writer}
               onChange={handleChange}
               placeholder="writer"
            />
            <input 
               type="text"
               name="actors"
               id="actors"
               
               className="movie-form"
               value={formData.actors}
               onChange={handleChange}
               placeholder="actors"
            />
            <input 
               type="text"
               name="plot"
               id="plot"
               className="movie-form"
               value={formData.plot}
               onChange={handleChange}
               placeholder="Plot"
            />
            <input 
               type="text"
               name="languageot"
               id="language"
               className="movie-form"
               value={formData.language}
               onChange={handleChange}
               placeholder="language"
            />
            <input 
               type="text"
               name="awards"
               id="awards"
               className="movie-form"
               value={formData.awards}
               onChange={handleChange}
               placeholder="awards"
            />
             <input 
               type="text"
               name="type"
               id="type"
               className="movie-form"
               value={formData.type}
               onChange={handleChange}
               placeholder="type"
            />
            <button type="submit">Add Movie</button>
         </form>  
        </div>
    )
}


export default NewMovieForm;