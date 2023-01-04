import React, { useState } from "react";


function NewMovieForm() {
    const [formData, setFormData] = useState({
        title: "",
        poster: "",
        year: "",
        rated: "",
        released: "", 
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
    console.log(formData)

    function handleChange(e) {
      const key = e.target.id
      setFormData({
         ...formData,
         [key]: e.target.value
      })
    }
    return (
        <div>
         <h3>New Movies</h3>
         <form>
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

         </form>  
        </div>
    )
}


export default NewMovieForm;