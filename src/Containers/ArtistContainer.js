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
    return (
      <Fragment >
        <NavBar />
        <div className='about-section'>
          <img className='about-image' src= '/images/artists.jpg' />
          <h3>ARTISTS</h3>
          { this.mapArtists() }
        </div>
      </ Fragment>
    )
  }
}
