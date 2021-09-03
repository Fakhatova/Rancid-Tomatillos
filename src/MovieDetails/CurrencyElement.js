import React from 'react';
import './MovieDetails.css'

const CurrencyElement = ({subject, amount}) => {
  const formattedCurrency = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const text = `${subject}: $${formattedCurrency}`

  return (
      <p className="movie-revenue">{text}</p>
  )
}

export default CurrencyElement;
