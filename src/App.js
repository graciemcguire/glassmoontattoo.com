import React, { Component } from 'react';
import './App.css';
import MainContainer from './Containers/MainContainer'
import ArtistContainer from './Containers/ArtistContainer'
import NavBar from './Components/NavBar'

export default class App extends Component {
  state = {
    artistClick: true
  }

  renderArtist = () => {
    return !this.state.artistClick ? <MainContainer /> : <ArtistContainer />
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        { this.renderArtist() }
      </div>
    );
  }
}
