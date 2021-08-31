import React from 'react'
import '../MovieDetails/MovieDetails.css'

const MovieDetails = ({movie}) => {
  return (
    <article className="movie-details">
      <img src={movie.poster_path} alt=""/>
       <h4> {movie.title}</h4>
       <p> {movie.average_rating}</p>
       <p> {movie.release_date}</p>
    </article>
  )
}


  export default MovieDetails
