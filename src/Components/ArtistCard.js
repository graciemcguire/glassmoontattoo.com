import React, { Component, Fragment } from 'react';
import instaLogo from '../insta.svg'
import emailLogo from '../email.svg'

export default class ArtistCard extends Component {
  render() {

    const { first_name, last_name, email, image, bio, instagram } = this.props.artist
    const full_name = `${first_name} ${last_name}`

    return (
      <Fragment >
        <div className='artist-bio'>
          <img className='artist-images' alt={ full_name } src={ `${ process.env.PUBLIC_URL }`{ image } }/>
          <h3>{ full_name }</h3>
          <p>{ bio }</p>
        </div>

        <div className= 'links'>
          <a href= { instagram } target="_blank" rel="noopener noreferrer" >
            <img className='link-images' src={ instaLogo } alt='instagram'/>
          </a>

          <a href= { email } >
            <img className='link-images' src={ emailLogo } alt='email'/>
          </a>
        </div>
      </Fragment>
    );
  }
}
