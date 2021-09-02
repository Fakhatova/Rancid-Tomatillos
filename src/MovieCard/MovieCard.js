import React from 'react'
import '../MovieCard/MovieCard.css'

const MovieCard = ({movieCard}) => {
  return (
    <article className="movie-card">
      <img  className="movie-image" src={movieCard.poster_path} alt=""/>
      <div className="movie-info">
        <p className="movie-title"> {movieCard.title}</p>       <p className="movie-ratings"> Rating: {movieCard.average_rating}</p>
        <p className="movie-release">Date Released: {movieCard.release_date}</p>
      </div>
    </article>
  )
}


  export default MovieCard
