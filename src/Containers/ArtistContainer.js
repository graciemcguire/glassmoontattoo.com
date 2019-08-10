import React, { Component } from 'react';
import { artists } from '../artistdb.json'
import ArtistCard from '../Components/ArtistCard'

export default class ArtistContainer extends Component {

  mapArtists = () => {
    return artists.map(artist=> (
      <ArtistCard key={ artist.id }  artist={ artist }/>
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
