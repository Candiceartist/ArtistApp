import './App.css';
import { useState, useEffect } from 'react';
import Display from "./components/Display"
import Search from './components/Search';

function App() {
  const [artist,setArtist] = useState(null);

  const getArt = async (searchTerm) => {
    const response =await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${searchterm}`)

  }

  
  
  return (
    <div className="App">
    <h1>Hello World</h1>
    <Search />
    <Display/>
    </div>
  );
}

export default App;
