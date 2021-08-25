import React from 'react' 
import  './MovieCard.css'

const MovieCard = (props) => {
  const ListofMovies = props.movies.map(movie => {
   return <h1>HERE IS GONNA BE MOVIE LIST CARDS</h1>
  })
  return (
      <main className="movie-card">
          {ListofMovies}
      </main>
  )
}

export default MovieCard