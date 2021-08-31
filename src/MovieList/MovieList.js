import React from 'react'
import { Link } from 'react-router-dom';
import  './MovieList.css'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = (props) => {
  const ListofMovies = props.movies.map(movie => {
    return (
      <Link to={`/${movie.id}`} key={movie.id}>
        <MovieCard movieCard={movie} />
      </Link>
    )
  })

  return (
      <main className="movie-list">
          {ListofMovies}
      </main>
  )
}

export default MovieList
