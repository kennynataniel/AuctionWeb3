import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure a better Auction in Web3 World</h1>
            <p>Experience the future of auctions with our Web3 platform. 
                Combining blockchain technology with a sleek, user-friendly interface, 
                we offer secure, transparent, and efficient auctions.
                Bid with confidence and explore a new era of digital trading where innovation 
                meets integrity.</p>
                <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
