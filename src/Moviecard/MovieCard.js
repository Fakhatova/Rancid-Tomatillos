import React from 'react'
import '../MovieCard/MovieCard.css'

const MovieCard = (props) => {
  return (
    <article className="movie-card">
      <img src="" alt=""/>
       <h4 className="movie-title"> Title goes here</h4>
       <p className="movie-ratings"> Ratings goes here</p>
       <p className="movie-tagline"></p>
    </article>
  )
}


  export default MovieCard