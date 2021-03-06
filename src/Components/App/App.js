import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import fetchMovieData from '../../API/ApiCalls';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    }
  }

  componentDidMount = () => {
    fetchMovieData.getAllMovies()
    .then(data => this.setState({movies:[ ...this.state.movies,...data.movies]}))
    .catch(() => this.setState({error: 'Something went wrong, please try again!'}))
  }

  render() {
    return (
      <main>
        <Nav goToIndex={this.goToIndex}/>
        {this.state.error && <p className="error">{this.state.error}</p>}
        {!this.state.movies.length && <p className="loading"> Please wait loading ...!</p>}
        <Route
          exact path="/Rancid-Tomatillos/"
          render={({match}) => {
            return <MovieList movies={this.state.movies} movieID={parseInt(match.params.id)} />
          }}
        />
         <Route
          exact path="/Rancid-Tomatillos/:id"
          render={({match}) => {
            return <MovieDetails movieID={parseInt(match.params.id)} />
          }}
        />
        <Footer />
      </main>
    )
  }
}

export default App;
