import React, { useState } from 'react'
import './Modal.css'

const Modal = ({ setShowModal, item }) => {

    const { title, currentBid } = item;

    const [bidValue, setBidValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const highestBidderAccount = "0x1acD91dB45F4728843F8F6d3A263f10953C136uYeL";
    const yourAccount = "0x57c95B45F4728843F8F6d3A263f10953C136deEd";

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
                    Highest Bid <span className="moneyBidder">{currentBid} ETH</span></p>
                <div className="input__item mb-4">
                    <input type="number" placeholder='00 : 00 ETH' value={bidValue} onChange={handleInputChange} />
                </div>
                <div className='bidder-information'>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className="TitleModal">Highest Bid</p>
                        <span className="moneyBidder">{currentBid} ETH</span>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <p className="TitleModal">Highest Bidder</p>
                        <span className="accountBidder">{highestBidderAccount.substring(0, 8)}...{highestBidderAccount.substring(30)}</span>
                    </div>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <p className="TitleModal">Your Account</p>
                    <span className="account">{yourAccount.substring(0, 8)}...{yourAccount.substring(30)} </span>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <p className="TitleModal">Balance</p>
                    <span className="money">0.12314 ETH </span>
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
