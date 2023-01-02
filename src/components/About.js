import React from "react";

function About( { movieData } ) {
    const {plot, language, actors, awards} = movieData
    return (
        <div>
          #About component
            <li>
                {/* <ul>Plot: {plot}</ul>
                <ul>Actors: {actors}</ul>
                <ul>Awards: {awards}</ul>
                <ul>Language: {language}</ul> */}
            </li>
        </div>
    )
}

export default About;