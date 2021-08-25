import React, { Component } from 'react';
import Nav from './Nav/Nav';
import './App.css';
import MovieList from './MovieList/MovieList';
import movieData from './MovieData/Data'


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return(
      <main className='App'>
        <Nav />
        <h1>Rancid Tomatillos</h1>
        <MovieList  movies={this.state.movies}/>
      </main>
    )
  }
}

export default App;
