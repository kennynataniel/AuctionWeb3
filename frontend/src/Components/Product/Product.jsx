import React from 'react'
import './Product.css'
import {Container, Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom'
import Productcard from '../Product-card/Productcard'
import {NFT__DATA} from '../../assets/data/data.js'


const Product = () => {
  return <section>
    <Container>
      <Row>
          {NFT__DATA.slice(0,4).map((item) =>(
            <Col lg="3">
              <Productcard key={item.id} item={item}/>
            </Col> 
            ))}


        <Col lg="12" className="d-flex justify-content-center align-items-center mb-5">
          <button className="btn btn-primary btn-exploremore">
           Explore More ...
          </button>
        </Col>

      </Row>
    </Container>
  </section>
}

export default Product
