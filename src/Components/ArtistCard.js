import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed';

export default class ArtistCard extends Component {

  render() {

    const{ first_name, last_name, email, image } = this.props.artist
    const full_name = `${first_name} ${last_name}`

    return (
      <div>
        <img alt={ full_name } src={ image }/>
        <h3>{ full_name }</h3>
        <InstagramEmbed
          url='https://www.instagram.com/p/B04kq2-l9jz/'
          maxWidth={320}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
    );
  }
}
