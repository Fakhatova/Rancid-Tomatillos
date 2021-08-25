import React from 'react' 
import  './MovieList.css'

const MovieList = (props) => {
  const ListofMovies = props.movies.map(movie => {
   return <h1>HERE IS GONNA BE MOVIE LIST CARDS</h1>
  })
  
  return (
      <main className="movie-list">
          {ListofMovies}
      </main>
  )
}

export default MovieList