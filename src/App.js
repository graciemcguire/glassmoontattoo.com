import React, { Component, Fragment } from 'react';
import './App.css';
import MainContainer from './Containers/MainContainer'
import ArtistContainer from './Containers/ArtistContainer'
import Faq from './Components/Faq'
import Healing from "./Components/Healing";
import About from './Components/About'
import { Switch, Route } from 'react-router-dom'

export default class App extends Component {

  render() {
    console.log('Made with ❤️ by Gracie McGuire in 2019');
    console.log('github.com/graciemcguire 🏝');
    return (
      <Fragment>
        <Switch>
          <Route path="/artists" component={ArtistContainer} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={Faq} />
          <Route path="/healing" component={Healing} />
          <Route path="/" component={MainContainer} />
          <Route path="/" component={MainContainer} />
          <Route path="/" component={MainContainer} />{" "}
        </Switch>
      </Fragment>
    );
  }
}
