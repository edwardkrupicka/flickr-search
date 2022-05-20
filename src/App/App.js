import logo from '../assets/logo.svg';
import Home from '../views/Home';
import Loading from '../views/Loading'
import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/api'
import './App.scss';

function App() {

  const[data, setData] = useState( [] );
  const[loaded, setLoaded] = useState( false );

  useEffect(() => {
    fetchData(
      'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=90520be9485600ef093684ca8edc1d59&format=json&nojsoncallback=1&safe_search=1&text=puppies', 
      setData, 
      setLoaded)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      { !loaded ? <Loading /> :
      <Home data={ data } />

   }
    </div>
  );
}

export default App;
