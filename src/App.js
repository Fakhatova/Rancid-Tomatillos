import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import './App.css';
import MovieList from './MovieList/MovieList';
// import movieData from './MovieData/Data'
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
        <h1>Rancid Tomatillos</h1>
        {this.state.error && <p>{this.state.error}</p>}
        {!this.state.movies.length && <p> Please wait loading ...!</p>}
        <Route
          exact path="/"
          render={() => {
            return <MovieList movies={this.state.movies} />
          }}
        />
        <Footer />
      </main>
    )
  }
}

export default App;
