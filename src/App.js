import React, { Component } from 'react';
import Nav from './Nav/Nav';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  render() {
    return(
      <main className='App'>
        <Nav />
        <h1>Rancid Tomatillos</h1>
      </main>
    )
  }
}

export default App;
