import React from 'react'
import '../MovieCard/MovieCard.css'

const MovieCard = ({movieCard}) => {
  return (
    <article className="movie-card">
      <img  className="movie-image" src={movieCard.poster_path} alt=""/>
       <h4 className="movie-title"> {movieCard.title}</h4>
       <p className="movie-ratings"> {movieCard.average_rating}</p>
       <p className="movie-tagline"> Heres a tagline!</p>
    </article>
  )
}


  export default MovieCard
