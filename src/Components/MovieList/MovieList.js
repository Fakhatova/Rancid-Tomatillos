import React from 'react'
import { Link } from 'react-router-dom';
import  './MovieList.css'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({movies, movieID}) => {
  const listofMovies = movies.map(movie => {
    return (
      <Link to={`/Rancid-Tomatillos/${movie.id}`} key={movie.id} className="movie-link">
        <MovieCard movieCard={movie} />
      </Link>
    )
  })

  return (
      <section className="movie-list">
        <p className="list-header">Featured Movies</p >
        <div className="list-grid">
          {listofMovies}
        </div>
      </section>
  )
}

export default MovieList
