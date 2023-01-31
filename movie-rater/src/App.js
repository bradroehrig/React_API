import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/movie-list';

function App() {

  const [movies, setMovie] = useState([]);

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/movies", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':'Token 0b5b3e40e093f6746767bed29354889f58bdaf0e',
      }
    })
    .then( resp => resp.json())
    .then( resp  => setMovie(resp))
    .catch( error => console.log(error))
  }, [])
<<<<<<< HEAD

=======
>>>>>>> 95e3870a99c23451e35965710afa3fbeec96a4b1
  return (
    
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
<<<<<<< HEAD
        <MovieList movies={movies}/>
=======
        <div>
          { movies.map( movie => {
            return <h2>{ movie.title }</h2>
          })}
        </div>
>>>>>>> 95e3870a99c23451e35965710afa3fbeec96a4b1
        <div>Movie details</div>
      </div>
    </div>
  );
}
export default App;