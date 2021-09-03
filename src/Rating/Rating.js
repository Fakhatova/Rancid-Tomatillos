import React from 'react';
import '../MovieDetails/MovieDetails'

const Rating = ({rating}) => {
  const formattedRating = Math.round(rating * 10) /10
  return (
    <p className="movie-ratings">Rating: {formattedRating}</p>
  )
}

export default Rating;
