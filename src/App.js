import React, { Component } from 'react';
import './App.css';
import MainContainer from './Containers/MainContainer'
import ArtistContainer from './Containers/ArtistContainer'
import NavBar from './Components/NavBar'

export default class App extends Component {
  state = {
    artistClick: false
  }

  renderContainer = () => !this.state.artistClick ? <MainContainer /> : <ArtistContainer />

  handleClick = () => this.setState=({ artistClick: !this.state.artistClick })

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <NavBar />
        <button onClick={ this.handleClick }>toggle to artist page</button>
        { this.renderContainer() }
      </div>
    );
  }
}
