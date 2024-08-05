import React from 'react'
import { Container, Row, Col  } from 'reactstrap'
import ProductCard from '../Product-card/Productcard'

import cimg1 from '../../assets/pp.png'
import img2 from '../../assets/gallery-2.png'

const item = {
    id: "2",
    title: "Handphone",
    imgUrl: img2,
    creator:"0x215126FJfa0198",
    creatorImg: cimg1,
    currentBid: 1.25,
}


const Create = () => {
  return (
    <>

    <section>
        <Container>
            <Row>
                <Col lg='3' md ='4' sm='6'>
                    <h5>Preview Item</h5>
                    <ProductCard item={item}/>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  );
}

export default Create
