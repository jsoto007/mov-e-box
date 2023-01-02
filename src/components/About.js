import React from "react";

function About( { movieData } ) {
    const {plot, language, actors, awards} = movieData
    return (
        <div>
            <li>{plot}</li>
            <li>{actors}</li>
            <li>{awards}</li>
            <li>{language}</li>
        </div>
    )
}

export default About;