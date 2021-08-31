import React from 'react'
import '../MovieDetails/MovieDetails.css'

const MovieDetails = ({movie}) => {
  return (
    <article className="movie-details">
      <img src={movie.poster_path} alt="" className="movie-image"/>
       <h4 className="movie-title"> {movie.title}</h4>
       <p className="movie-ratings"> {movie.average_rating}</p>
       <p className="movie-release"> {movie.release_date}</p>
    </article>
  )
}


  export default MovieDetails
