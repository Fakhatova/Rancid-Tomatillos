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
    // i dont see us using props anywhere?
  }

  componentDidMount = () => {
    fetchMovieData.getSelectedMovie(this.props.movieID)
    .then(data => this.setState({movie: data.movie}))
    .catch(error => this.setState({error: error}))
  }
   
// we need to use as much adata as we can, on movie description. It seems like only date of release and description
// and title,image rating seems pretty not engaging with user. Not enought content to catch users attention

  render() {
    let movie;
    if (this.state.movie.id !== this.props.movieID) {
    movie = <div>Loading...</div>
    } else {
      const roundUpRating = Math.round(this.state.movie.average_rating)
      const genres = this.state.movie.genres.map(genre => genre)
      movie = <>
        {this.state.error && <PageNotFound/>}
        {!this.state.error &&
          <article className="movie-details">
            <img src={this.state.movie.poster_path} alt="Movie Poster" className="movie-image"/>
            <h4 className="movie-title"> {this.state.movie.title}</h4>
            <p className="movie-ratings"> Rating: {roundUpRating}</p>
            <p className="genres"> Genres:&nbsp;{genres} </p>
            <section className="description-container">
              <p className="movie-description">{this.state.movie.overview}</p>
            </section>
            <p className="movie-release"> Date of release: {this.state.movie.release_date}</p>
            <p className="movie-revenue"> Revenue: {this.state.movie.revenue}</p>
            <p className="movie-runtime"> Run time: {this.state.movie.runtime}</p>
          </article>
        }
      </>
    }
    
    return (
      <>{movie}</>
    );
  }
}

  export default MovieDetails
