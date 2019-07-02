import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './Containers/MainContainer'
import ArtistContainer from './Containers/ArtistContainer'

function App() {
  return (
    <div className="App">
      <MainContainer />
      <ArtistContainer />
    </div>
  );
}

export default App;
