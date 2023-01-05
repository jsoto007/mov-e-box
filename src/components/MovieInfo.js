import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function MovieInfo() {
    const [itemInfo, setItemInfo] = useState([])
    const { id } = useParams();
    const {plot, language, actors, awards, poster, title} = itemInfo
    
    useEffect(() => {
        fetch(`http://localhost:3000/movies/${id}`)
            .then((resp) => resp.json())
            .then((data) => setItemInfo(data))
    }, [id])
    return (
        <div className="move-information">
            <img src={poster} alt={title} />
                <ul>Plot: {plot}</ul>
                <ul>Actors: {actors}</ul>
                <ul>Awards: {awards}</ul>
                <ul>Language: {language}</ul>
        </div>
    )
}

export default MovieInfo;