import './App.css';
import { useState, useEffect } from 'react';
import Display from "./components/Display"
import Search from './components/Search';

function App() {
  const [artist,setArtist] = useState(null);

  const getArt = async (searchterm) => {
    const response = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${searchterm}`);

    const data = await response.json();

    setArtist(data.data);
    
  };

  useEffect (() => {
    getArt("");
  }, []);

  return (
    <div className="App">
    <h1>Hello World</h1>
    <Search artsearch={getArt}/>
    <Display artist={artist}/>
    </div>
  );
}

export default App;
