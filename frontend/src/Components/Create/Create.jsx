import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { successNotification} from '../../plugins/Notification';
import { useNavigate } from 'react-router-dom';
import CustomDatePicker from '../CustomDatePicker';
import ProductCardPreview from '../Product-card/ProductcardPreview';
import Navbar from '../Navbar/Navbar';
import './Create.css';

import imgDummy from '../../assets/dummy.png';

const Create = () => {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [startingBid, setStartingBid] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const oneWeekInMillis = 7 * 24 * 60 * 60 * 1000;
        const startDateMillis = startDate.getTime();
        const endDateMillis = endDate.getTime();
    
        if (startingBid <= 0) {
            setErrorMessage('The starting bid must be greater than 0.');
        } else if (endDateMillis - startDateMillis < oneWeekInMillis) {
            setErrorMessage('The expiration date must be at least one week after the starting date.');
        } else {
            try {
                setErrorMessage('');
    
                // Prepare form data
                const formData = new FormData();
                formData.append('title', title);
                formData.append('startingBid', startingBid);
                formData.append('startDate', startDate.toISOString());
                formData.append('endDate', endDate.toISOString());
                if (file) {
                    formData.append('file', file);
                }
    
                // Send data to backend
                const response = await fetch('http://your-backend-api-url/items', {
                    method: 'POST',
                    body: formData,
                });
    
                if (response.ok) {
                    successNotification('Form submitted successfully!');
                    setTimeout(() => {
                        navigate('/');
                    }, 1000);
                } else {
                    setErrorMessage('Failed to submit form.');
                }
            } catch (error) {
                setErrorMessage('An error occurred while submitting the form.');
            }
        }
    };
    

    const handleFileChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    };

    const item = {
        id: "2",
        title: title || "Dummy Item",
        imgUrl: file || imgDummy,
        creator: "Dummy Creator",
        currentBid: startingBid || "0",
        startDate: startDate.toLocaleDateString() || "-",
        endDate: endDate.toLocaleDateString() || "-",
    };

    return (
        <div>
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
                                <form onSubmit={handleSubmit}>
                                    <div className="form__input">
                                        <label htmlFor="">Title</label>
                                        <input
                                            type="text"
                                            placeholder="Enter title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="">Upload File</label>
                                        <input
                                            type="file"
                                            className="upload__input"
                                            onChange={handleFileChange}
                                            required
                                        />
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="">Starting Bid (ETH)</label>
                                        <input
                                            type="number"
                                            placeholder="Enter price (ETH)"
                                            value={startingBid}
                                            onChange={(e) => setStartingBid(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between">
                                        <CustomDatePicker
                                            label="Starting Date"
                                            selectedDate={startDate}
                                            onDateChange={setStartDate}
                                            required
                                        />
                                        <CustomDatePicker
                                            label="Expiration Date"
                                            selectedDate={endDate}
                                            onDateChange={setEndDate}
                                            required
                                        />
                                    </div>

                                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                                    <br />
                                    <button className="btn-submit" type="submit">
                                        Create Item
                                    </button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Create;
