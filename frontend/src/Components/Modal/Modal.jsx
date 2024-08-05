import React, { useState } from 'react'
import './Modal.css'
import { NFT__DATA } from '../../assets/data/data.js'

const Modal = ({ setShowModal, item }) => {

    const [nftData, setNftData] = useState(NFT__DATA);
    const { title, id, currentBid, creatorImg, imgUrl, creator } = item;


    const [bidValue, setBidValue] = useState('');

    const handleInputChange = (event) => {
        setBidValue(event.target.value);
    };

    const handleBidClick = () => {
        const updatedData = NFT__DATA.map(item => {
            if (item.id === id) {
                return { ...item, currentBid: parseFloat(bidValue) };
            }
            return item;
        });
        setNftData(updatedData);
        console.log(updatedData);
    };

    return (
        <div className="modal__wrapper">
            <div className="single__modal">
                <span className="close__modal">
                    <i class="ri-close-line" onClick={() => setShowModal(false)}></i>
                </span>
                <h6 className="text-center text-light">Place a Bid</h6>
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
                    <p className="TitleModal">Service Fee</p>
                    <span className="money">{currentBid * 1 / 100} ETH</span>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <p className="TitleModal">Total Bid Amount</p>
                    <span className="money">{currentBid * 1 / 100 + currentBid} ETH</span>
                </div>

                <button className="place__bid-btn" onClick={handleBidClick}>
                    Place a Bid
                </button>
            </div>
        </div>

    )
}

export default Modal
