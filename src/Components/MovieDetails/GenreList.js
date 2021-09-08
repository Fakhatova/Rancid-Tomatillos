import React from 'react';
import './MovieDetails.css'

const GenreList = ({genres}) => {
  const genreList = genres.join(' ')
  return (
    <p className="genres">Genres: {genreList}</p>
  )
}

export default GenreList;
