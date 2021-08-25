import React from 'react'
import '../MovieCard/MovieCard.css'

const MovieCard = ({movieCard}) => {
  console.log(movieCard)
  return (
    <article className="movie-card">
      <img  className="movie-image" src="" alt=""/>
       <h4 className="movie-title"> {movieCard.title}</h4>
       <p className="movie-ratings"> Ratings goes here</p>
       <p className="movie-tagline"></p>
    </article>
  )
}


  export default MovieCard