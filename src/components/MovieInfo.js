import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function MovieInfo() {
    const [itemInfo, setItemInfo] = useState([])
    const { id } = useParams();
    const {plot, language, actors, awards} = itemInfo
    
    useEffect(() => {
        fetch(`http://localhost:3000/movies/${id}`)
            .then((resp) => resp.json())
            .then((data) => setItemInfo(data))
    }, [id])
    return (
        <div>
            <li>
                <ul>Plot: {plot}</ul>
                <ul>Actors: {actors}</ul>
                <ul>Awards: {awards}</ul>
                <ul>Language: {language}</ul>
            </li>
        </div>
    )
}

export default MovieInfo;