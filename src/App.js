import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import './App.css';
import MovieList from './MovieList/MovieList';
import MovieDetails from './MovieDetails/MovieDetails';
import fetchMovieData from './API/AppiCalls';
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
   fetchMovieData()
   .then(data => this.setState({movies:[ ...this.state.movies,...data.movies]}))
   .catch(error => this.setState({error: 'Something went wrong, please try again!'}))
 }

  render() {
    return(
      <main className='App'>
        <Nav goToIndex={this.goToIndex}/>
        <h1>Featured Movies</h1>
        {this.state.error && <p className="error">{this.state.error}</p>}
        {!this.state.movies.length && <p> Please wait loading ...</p>}
        {!this.state.movieShow.length && <MovieList  movies={this.state.movies} toggleMovie={this.toggleMovie}/>}
        <MovieList  movies={this.state.movieShow} toggleMovie={this.toggleMovie}/>

        <h1>Rancid Tomatillos</h1>
        {this.state.error && <p>{this.state.error}</p>}
        {!this.state.movies.length && <p> Please wait loading ...!</p>}
        <Route
          exact path="/"
          render={() => {
            return <MovieList movies={this.state.movies} />
          }}
        />
        <Route
          exact path="/:id"
          render={({match}) => {
            const movie = this.state.movies.find(movie => movie.id === parseInt(match.params.id))
            return <MovieDetails movie={movie} />
          }}
        />
        main
        <Footer />
      </main>
    )
  }
}

export default App;
