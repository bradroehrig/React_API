import React, { useState, useEffect } from 'react';
import './App.css';

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
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        <div>
          { movies.map( movie => {
            return <h2>{ movie.title }</h2>
          })}
        </div>
        <div>Movie details</div>
      </div>
    </div>
  );
}
export default App;