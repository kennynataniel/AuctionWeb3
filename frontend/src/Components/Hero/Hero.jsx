import React from 'react'
import './Hero.css'
import {Container, Row, Col } from 'reactstrap'
import {Link} from 'react-router-dom'
import heroImg from '../../assets/NFT.png'

const Hero = () => {
  // return (
  //   <div className='hero container'>
  //       <div className='hero-text'>
  //           <h1>We Ensure a better Auction in Web3 World</h1>
  //           <p>Experience the future of auctions with our Web3 platform. 
  //               Combining blockchain technology with a sleek, user-friendly interface, 
  //               we offer secure, transparent, and efficient auctions.
  //               Bid with confidence and explore a new era of digital trading where innovation 
  //               meets integrity.</p>
  //               <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
  //       </div>
  //   </div>
  // )
  
  
  return (
  <section className="hero hero__section">
    <Container>
      <Row>
        <Col lg="7" md="7">
          <div className="hero__content">
            <h2>We Ensure a better Auction in <span><h3>Web3 World</h3></span></h2>
            <p>Experience the future of auctions with our Web3 platform.
              Combining blockchain technology with a sleek, user-friendly interface,
              we offer secure, transparent, and efficient auctions.
              Bid with confidence and explore a new era of digital trading where innovation
              meets integrity.</p>

            <div className="hero__btns d-flex align-items-center gap-4">
              <button className='explore__btn d-flex align-items-center gap-2'>
                <i class="ri-rocket-line"></i>{" "}
                {/* <Link to="/market">Explore</Link> */}
                Explore
              </button>
              <button className='create__btn d-flex align-items-center gap-2'>
                <i class="ri-ball-pen-line"></i>
                {/* <Link to="/create">Explore</Link> */}
                Explore
              </button>
            </div>
          </div>
        </Col>

        <Col lg="5" md="5">
          <div classname="hero__img">
              <img src={heroImg} className='w-100 ntfimg' alt="" />
          </div>
        </Col>

      </Row>
    </Container>
  </section>
  )
}

export default Hero;
