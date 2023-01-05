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

      fetch("http://localhost:3000/movies", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
      })
      .then((resp) => resp.json())
      .then((newItem) => onAddItem(newItem))
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
               id="title"
               value={formData.title}
               onChange={handleChange}
               placeholder="Movie Name"
            />
             <input 
               type="text"
               name="poster"
               id="poster"
               value={formData.poster}
               onChange={handleChange}
               placeholder="Poster URL"
            />
             <input 
               type="text"
               name="released"
               id="released"
               value={formData.released}
               onChange={handleChange}
               placeholder="Release Date"
            />
            <h3>Additonal Informaiton (obtional)</h3>
             <input 
               type="text"
               name="rated"
               id="rated"
               value={formData.rated}
               onChange={handleChange}
               placeholder="Rated"
            />
              <input 
               type="text"
               name="runtime"
               id="runtime"
               value={formData.runtime}
               onChange={handleChange}
               placeholder="Runtime"
            />
               <input 
               type="text"
               name="genre"
               id="genre"
               value={formData.genre}
               onChange={handleChange}
               placeholder="Genre"
            />
            <input 
               type="text"
               name="director"
               id="director"
               value={formData.director}
               onChange={handleChange}
               placeholder="Director"
            />
            <input 
               type="text"
               name="writer"
               id="writer"
               value={formData.writer}
               onChange={handleChange}
               placeholder="writer"
            />
            <input 
               type="text"
               name="actors"
               id="actors"
               value={formData.actors}
               onChange={handleChange}
               placeholder="actors"
            />
            <input 
               type="text"
               name="plot"
               id="plot"
               value={formData.plot}
               onChange={handleChange}
               placeholder="Plot"
            />
            <input 
               type="text"
               name="languageot"
               id="language"
               value={formData.language}
               onChange={handleChange}
               placeholder="language"
            />
            <input 
               type="text"
               name="awards"
               id="awards"
               value={formData.awards}
               onChange={handleChange}
               placeholder="awards"
            />
             <input 
               type="text"
               name="type"
               id="type"
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