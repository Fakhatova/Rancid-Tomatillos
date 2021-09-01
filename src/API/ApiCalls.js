const fetchMovieData = {
  getAllMovies: () => {
    return  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response =>response.json())
  },
  getSelectedMovie: (id) => {
    return  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          return Promise.reject(`error ${response.status}`)
        }
      })
  }

}

export default fetchMovieData
