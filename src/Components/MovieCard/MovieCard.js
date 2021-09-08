import React from 'react'
import Rating from '../Rating/Rating'
import './MovieCard.css'

const MovieCard = ({movieCard}) => {
  return (
    <article className="movie-card">
      <img  className="movie-image" src={movieCard.poster_path} alt=""/>
      <div className="movie-info">
        <h2 className="movie-title"> {movieCard.title}</h2>
        <Rating rating={movieCard.average_rating}/>
        <p className="movie-release">Date Released: {movieCard.release_date}</p>
      </div>
    </article>
  )
}


  export default MovieCard
