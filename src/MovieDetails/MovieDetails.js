import React, {Component} from 'react'
import PageNotFound from './PageNotFound'
import fetchMovieData from '../API/ApiCalls'
import '../MovieDetails/MovieDetails.css'

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      error: ''
    }
  }

  componentDidMount = () => {
    fetchMovieData.getSelectedMovie(this.props.movieID)
    .then(data => this.setState({movie: data.movie}))
    .catch(error => this.setState({error: error}))
  }


  render() {
    return (
      <>
        {this.state.error && <PageNotFound/>}
        {!this.state.error &&
          <article className="movie-details">
            <img src={this.state.movie.poster_path} alt="Movie Poster" className="movie-image"/>
            <h4 className="movie-title"> {this.state.movie.title}</h4>
            <p className="movie-ratings"> {this.state.movie.average_rating}</p>
            <p className="movie-release"> {this.state.movie.release_date}</p>
          </article>
        }
      </>
    );
  }
}

  export default MovieDetails
