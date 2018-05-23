import React, {Component} from 'react'


// Stateless component (Increases performance), pass props as an argument
const Movie = (props) => {
    return (
        <div>
        <h2>{props.movie.name}</h2>
        <p>{props.movie.description}</p>
        <h4>Rating: {props.movie.rating} / 5 </h4>
        </div>
    )
}

export default Movie