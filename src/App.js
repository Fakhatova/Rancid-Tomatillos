// import logo from './logo.svg';
import './App.css';
import MovieCard from './MovieCard/MovieCard';
import movieData from './MovieData/Data'

function App(props) {
  return (
    <div className="App">
      <MovieCard  movies={movieData.movies}/>
    </div>
  );
}

export default App;
