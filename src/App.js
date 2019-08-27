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
        <Switch>
          <Route
            path="/artists"
            component={ ArtistContainer }
          />
          <Route
            path="/about"
            component={ '' }
          />
          <Route
            path="/contact"
            component={ '' }
          />
          <Route
            path="/"
            component={ MainContainer }
          />
        </Switch>
      </Fragment>
    );
  }
}
