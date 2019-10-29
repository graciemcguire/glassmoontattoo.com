import React, { Component, Fragment } from 'react';

export default class ArtistCard extends Component {
  render() {

    const { first_name, last_name, email, image } = this.props.artist
    const full_name = `${first_name} ${last_name}`

    return (
      <div>
        // <img className='artist-images' alt={ full_name } src={ image }/>
        <h3>{ full_name }</h3>

      </div>
    );
  }
}
