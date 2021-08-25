import React from 'react' 
import  './MovieList.css'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = (props) => {
  const ListofMovies = props.movies.map(movie => <MovieCard/>)
  
  return (
      <main className="movie-list">
          {ListofMovies}
      </main>
  )
}

export default MovieList