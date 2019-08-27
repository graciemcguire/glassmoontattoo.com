import React, { Component, Fragment } from 'react';
import './App.css';
import MainContainer from './Containers/MainContainer'
import ArtistContainer from './Containers/ArtistContainer'
import NavBar from './Components/NavBar'
import { Switch, Route } from 'react-router-dom'

export default class App extends Component {

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route
            path="/"
            component={ MainContainer }
            />
          <Route
            path="/artists"
            component={ ArtistContainer }/>
        </Switch>
      </Fragment>
    );
  }
}
