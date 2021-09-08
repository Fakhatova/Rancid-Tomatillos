import React, {Component} from 'react'
import PageNotFound from './PageNotFound'
import GenreList from './GenreList'
import Rating from '../Rating/Rating'
import CurrencyElement from './CurrencyElement'
import fetchMovieData from '../API/ApiCalls'
import '../MovieDetails/MovieDetails.css'

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
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
        {this.state.error && this.state.movie && <PageNotFound/>}
        {this.state.movie && 
          <article className="movie-details" style={
            { backgroundImage: `url(${this.state.movie.backdrop_path})` }
          }>
            <img src={this.state.movie.poster_path} alt="Movie Poster" className="movie-image"/>
            <div className="overal-stats">
              <p className="movie-title"> {this.state.movie.title}</p>
              <Rating rating={this.state.movie.average_rating}/>
              <CurrencyElement subject={'Budget'} amount={this.state.movie.budget}/>
              <CurrencyElement subject={'Revenue'} amount={this.state.movie.revenue}/>
              <p className="movie-runtime"> Run time: {this.state.movie.runtime} minutes</p>
              <GenreList genres={this.state.movie.genres}/>
              <p className="movie-release"> Date Released: {this.state.movie.release_date}</p>
            </div>
            <section className="description-container">
              <p className="movie-description">{this.state.movie.overview}</p>
            </section>
          </article>
        }
      </>
    );
  }
}

  export default MovieDetails
