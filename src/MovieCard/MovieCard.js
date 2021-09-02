import React from 'react'
import '../MovieCard/MovieCard.css'

const MovieCard = ({movieCard}) => {
  return (
    <article className="movie-card">
      <img  className="movie-image" src={movieCard.poster_path} alt=""/>
       <p className="movie-title"> {movieCard.title}</p>
       <p className="movie-ratings"> {movieCard.average_rating}</p>
       <p className="movie-release">{movieCard.release_date}</p>
    </article>
  )
}


  export default MovieCard
