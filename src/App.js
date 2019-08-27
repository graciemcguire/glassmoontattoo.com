import React, { Component, Fragment } from 'react';
import './App.css';
import MainContainer from './Containers/MainContainer'
import ArtistContainer from './Containers/ArtistContainer'
import Contact from './Components/Contact'
import About from './Components/About'
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
            component={ About }
          />
          <Route
            path="/contact"
            component={ Contact }
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
