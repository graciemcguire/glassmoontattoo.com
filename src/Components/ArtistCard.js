import React, { Component } from 'react';

export default class ArtistCard extends Component {

  render() {
    const{ first_name, last_name, email } = this.props.artist
    console.log(this.props);
    return (
      <div>
      <h3>{ first_name }</h3>
      </div>
    );
  }

}
