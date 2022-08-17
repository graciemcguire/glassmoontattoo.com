import React, { Component, Fragment } from 'react';
import instaLogo from '../insta.svg'
import emailLogo from '../email.svg'

export default class ArtistCard extends Component {
  render() {

    const { first_name, last_name, image, bio, instagram, pronouns, booking } = this.props.artist
    const full_name = `${first_name} ${last_name}`

    return (
      <Fragment>
        <div className='artist-bio'>
          <img className='artist-images' alt={ full_name } src={ `${ process.env.PUBLIC_URL}${ image }` }/>
          <h3>{ full_name }</h3>
          <p className='faq-a'>{ bio }</p>
          <p className='faq-a'>{ pronouns }</p>
          <p className='faq-a'>{ booking }</p>
        </div>

        <div className= 'links'>
          <a href= { instagram } target="_blank" rel="noopener noreferrer" >
            <img className='link-images' src={ instaLogo } alt='instagram'/>
          </a>

        </div>
      </Fragment>
    );
  }
}
