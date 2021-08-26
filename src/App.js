import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import './App.css';
import MovieList from './MovieList/MovieList';
import movieData from './MovieData/Data'
import fetchMovieData from './API/AppiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      movieShow: []
    }
  }
  
 componentDidMount = () => {

 }

  goToIndex = () => {
    this.setState({movieShow: []})
  }

  toggleMovie = (id) => {
    const movie = this.state.movies.find(movie => movie.id === id)
    this.state.movieShow.length ? this.setState({movieShow: []}) :this.setState({movieShow: [movie]})
  }

  render() {
    return(
      <main className='App'>
        <Nav goToIndex={this.goToIndex}/>
        <h1>Rancid Tomatillos</h1>
        {!this.state.movieShow.length && <MovieList  movies={this.state.movies} toggleMovie={this.toggleMovie}/>}
        <MovieList  movies={this.state.movieShow} toggleMovie={this.toggleMovie}/>
        <Footer />
      </main>
    )
  }
}

export default App;
