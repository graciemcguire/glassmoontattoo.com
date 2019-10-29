import React, { Component, Fragment } from 'react';
import { artists } from '../artistdb.json'
import ArtistCard from '../Components/ArtistCard'
import NavBar from '../Components/NavBar'

export default class ArtistContainer extends Component {

  mapArtists = () => {
    return artists.map(artist=> (
      <ArtistCard key={ artist.id }  artist={ artist }/>
    ))
  }

  render() {
    console.log(artists);
    return (
      <Fragment>
        <NavBar />
        <div>
          <h1>artists</h1>
          { this.mapArtists() }
        </div>
      </ Fragment>
    )
  }
}
