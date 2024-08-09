import React from 'react'
import './Product.css'
import { Container, Row, Col } from 'reactstrap'

import Productcard from '../Product-card/Productcard'
import { NFT__DATA } from '../../assets/data/data.js'
import { Link as RouterLink } from 'react-router-dom';


const Product = () => {
  return <section>
    <Container>
      <Row>
        {NFT__DATA.slice(0, 4).map((item) => (
          <Col lg="3">
            <Productcard key={item.id} item={item} />
          </Col>
        ))}


        <Col lg="12" className="d-flex justify-content-center align-items-center mb-5">
          <RouterLink className='custom-link' to='/marketplace'>
            <button className="btn btn-primary btn-exploremore">
              Explore More ...
            </button>
          </RouterLink>
        </Col>

      </Row>
    </Container>
  </section>
}

export default Product
