import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function MovieInfo() {
    const [itemInfo, setItemInfo] = useState([])
    const { id } = useParams();
    const {plot, language, actors, awards, poster, title, released} = itemInfo
    
    useEffect(() => {
        fetch(`http://localhost:3002/movies/${id}`)
            .then((resp) => resp.json())
            .then((data) => setItemInfo(data))
    }, [id])
    return (
        <div className="move-information">
            <img src={poster} alt={title} />
                <ul>
                    <li>{title}</li>
                    <li>Released: {released}</li>
                    <li>Plot: {plot}</li>
                    <li>Actors: {actors}</li>
                    <li>Actors: {actors}</li>
                    <li>Awards: {awards}</li>
                    <li>Language: {language}</li>
                </ul>
        </div>
    )
}

export default MovieInfo;