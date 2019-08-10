import React, { Component } from 'react';
import { artists } from '../artistdb.json'

export default class ArtistContainer extends Component {

  mapArtists = () => {
    return artists.map(artist=> (
      artist.first_name
    ))
  }

  render() {
    console.log(artists);
    return (
      <div className="main-background">
      <h1>artists</h1>
      { this.mapArtists() }
      </div>
    )
  }
}
