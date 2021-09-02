import React from 'react'
import { Link } from 'react-router-dom';
import  './MovieList.css'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = (props) => {
  const listofMovies = props.movies.map(movie => {
    return (
      <Link to={`/${movie.id}`} key={movie.id} className="movie-link">
        <MovieCard movieCard={movie} />
      </Link>
    )
  })

  return (
      <main className="movie-list">
          {listofMovies}
      </main>
  )
}

export default MovieList
