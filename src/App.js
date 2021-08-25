// import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList/MovieList';
import movieData from './MovieData/Data'

function App(props) {
  return (
    <div className="App">
      <MovieList  movies={movieData.movies}/>
    </div>
  );
}

export default App;
