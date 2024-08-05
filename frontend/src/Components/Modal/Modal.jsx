import React, { useState } from 'react'
import './Modal.css'

const Modal = ({ setShowModal, item }) => {

    const { title, currentBid } = item;

    const [bidValue, setBidValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setBidValue(value);
    };

    const handleSubmit = () => {

        const numericBidValue = parseFloat(bidValue);
        const numericCurrentBid = parseFloat(currentBid);

        if (isNaN(numericBidValue) || numericBidValue <= numericCurrentBid) {
            setErrorMessage(`Bid must be greater than ${currentBid} ETH`);
        } else {

        }
    };

    return (
        <div className="modal__wrapper">
            <div className="single__modal">
                <span className="close__modal">
                    <i class="ri-close-line" onClick={() => setShowModal(false)}></i>
                </span>
                <h6 className="text-center text-light">Place a Bid - {title}</h6>
                <p className="text-center text-light">
                    You must bid at least <span className="money">{currentBid} ETH</span></p>
                <div className="input__item mb-4">
                    <input type="number" placeholder='00 : 00 ETH' value={bidValue} onChange={handleInputChange} />
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <p className="TitleModal">You must bid at least</p>
                    <span className="money">{currentBid} ETH</span>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <p className="TitleModal">Total Bid Amount</p>
                    <span className="money">{bidValue} ETH</span>
                </div>

                {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                )}

                <button className="place__bid-btn" onClick={handleSubmit}>
                    Place a Bid
                </button>
            </div>
        </div>

    )
}

export default Modal
