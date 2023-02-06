import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Auth from './components/auth';
import reportWebVitals from './reportWebVitals';
import {Route, Routes, BrowserRouter } from 'react-router-dom';

export const TokenContext = createContext(null);

function Router(){

  const [token, setToken] = useState('');


  return (

    <React.StrictMode>
      <TokenContext.Provider value={{token, setToken}}>      
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={ <Auth/> } />
            <Route path="/movies" exact element={ <App/> } />
          </Routes>
        </BrowserRouter>
      </TokenContext.Provider>
    </React.StrictMode>
  )
}

// const root = ReactDOM.createRoot(
//   document.getElementById('root'),
//   );
// root.render();

ReactDOM.createRoot(
  document.getElementById("root"),
)
.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);

reportWebVitals();
