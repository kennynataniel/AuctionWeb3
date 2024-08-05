import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import CustomDatePicker from '../CustomDatePicker';
import ProductCardPreview from '../Product-card/ProductcardPreview'
import Navbar from '../Navbar/Navbar'
import './Create.css'


import cimg1 from '../../assets/pp.png'
import img2 from '../../assets/gallery-2.png'

const item = {
    id: "2",
    title: "Handphone",
    imgUrl: img2,
    creator: "0x21...",
    creatorImg: cimg1,
    currentBid: 1.25,
    startDate: "03/05/2024",
    endDate: "10/05/2024",
}


const Create = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <div >
            <Navbar />
            <section>
                <Container>
                    <Row className="form_input_all">
                        <Col lg="3" md="4" sm="6">
                            <h5>Preview Item</h5>
                            <ProductCardPreview item={item} />
                        </Col>
                        <Col lg="9" md="8" sm="6">
                            <div className="create__item">
                                <form action="">

                                    <div className="form__input">
                                        <label htmlFor="">Title</label>
                                        <input type="text" placeholder="Enter title" />
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="">Upload File</label>
                                        <input type="file" className="upload__input" />
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="">Starting Bid</label>
                                        <input type="number" placeholder="Enter price (ETH)" />
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between">
                                        <CustomDatePicker
                                            label="Starting Date"
                                            selectedDate={startDate}
                                            onDateChange={setStartDate}
                                        />
                                        <CustomDatePicker
                                            label="Expiration Date"
                                            selectedDate={endDate}
                                            onDateChange={setEndDate}
                                        />
                                    </div>
                                    <button className="btn-submit">
                                        Submit
                                     </button>


                                </form>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Create
