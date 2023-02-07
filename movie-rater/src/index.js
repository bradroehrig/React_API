import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Auth from './components/auth';
import reportWebVitals from './reportWebVitals';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

function Router(){

  return (
    <React.StrictMode>
      <CookiesProvider>      
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={ <Auth/> } />
            <Route path="/movies" exact element={ <App/> } />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(
  document.getElementById("root"),
)
.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);

reportWebVitals();