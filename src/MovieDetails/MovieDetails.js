import React, {Component} from 'react'
import '../MovieDetails/MovieDetails.css'

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: null,
      error: ''
    }
  }



  render() {
    return (
      <article className="movie-details">
        <img src={this.state.movie.poster_path} alt="" className="movie-image"/>
        <h4 className="movie-title"> {this.state.movie.title}</h4>
        <p className="movie-ratings"> {this.state.movie.average_rating}</p>
        <p className="movie-release"> {this.state.movie.release_date}</p>
      </article>
    );
  }
}


// const MovieDetails = ({movie}) => {
//   return (
//     <article className="movie-details">
//       <img src={movie.poster_path} alt="" className="movie-image"/>
//        <h4 className="movie-title"> {movie.title}</h4>
//        <p className="movie-ratings"> {movie.average_rating}</p>
//        <p className="movie-release"> {movie.release_date}</p>
//     </article>
//   )
// }


  export default MovieDetails
