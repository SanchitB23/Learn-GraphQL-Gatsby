import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = ({ showPerson }) => {
  return (
    <header className='hero'>
      {showPerson &&
      <StaticImage src='../assets/person.png' alt='hero-person' placeholder='blurred' className='hero-person' />}
    </header>
  )
}

export default Hero
