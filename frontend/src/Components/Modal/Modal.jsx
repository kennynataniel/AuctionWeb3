import React, { useState } from 'react'
import './Modal.css'
import WalletBalance from '../../api/MetamaskGetData';
import { useAuction } from '../../Auction';
import fetchTransactionDetails from '../../api/RefreshPrice.js';

const Modal = ({ setShowModal, item }) => {

    const { title, currentBid, creator } = item;

    const [bidValue, setBidValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState('');
    const [currentAddressState, setCurrentAddressState] = useState(creator);
    const [currentBidState, setCurrentBidState] = useState(currentBid);
    const [refreshed, setRefreshed] = useState(false); // New state to track refresh


    const { placeBid, highestBidder } = useAuction();

    const handleInputChange = (event) => {
        const value = event.target.value;
        setBidValue(value);
    };

    const handleSubmit = async () => {

        if (!refreshed) {
            setErrorMessage('Please click "Refresh" to update the bid information before placing a bid.');
            return;
        }

        const numericBidValue = parseFloat(bidValue);
        const numericCurrentBid = parseFloat(currentBidState);

        if (isNaN(numericBidValue) || numericBidValue <= numericCurrentBid) {
            setErrorMessage(`Bid must be greater than ${currentBid} ETH`);
        } else {
            try {
                await placeBid(bidValue);
                setErrorMessage('');
                setShowModal(false);
            } catch (error) {
                setErrorMessage(error);
            }
        }
    };

    const handleRefreshPrice = async () => {
        try {
            // Fetch the highest transaction details once
            const { value: highestBidValue, address: highestBidAddress } = await fetchTransactionDetails();

            // Update the state with the highest bid value and address
            setCurrentBidState(highestBidValue);
            setCurrentAddressState(highestBidAddress);

            setRefreshed(true);
        } catch (error) {
            console.error('Error fetching the highest bid:', error);
        }
    };

    const formatAddress = (addr) => {
        if (addr && addr.length > 12) {
            return `${addr.substring(0, 8)}...${addr.substring(addr.length - 4)}`;
        }
        return addr;
    };

    return (
        <div className="modal__wrapper">
            <div className="single__modal">
                <span className="close__modal">
                    <i class="ri-close-line" onClick={() => setShowModal(false)}></i>
                </span>
                <h6 className="text-center text-light">Place a Bid - {title}</h6>
                <p className="text-center text-light">
                    Highest Bid <span className="moneyBidder">{currentBidState} ETH</span></p>
                <div className="input__item mb-4">
                    <input type="number" placeholder='00 : 00 ETH' value={bidValue} onChange={handleInputChange} />
                </div>
                <div className='bidder-information'>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className="TitleModal">Highest Bid</p>
                        <span className="moneyBidder">
                            {currentBidState} ETH
                            <button className="place__bid-btn btn-refresh" onClick={handleRefreshPrice}>
                                Refresh
                            </button>
                        </span>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <p className="TitleModal">Highest Bidder</p>
                        <span className="accountBidder"> {formatAddress(currentAddressState)}</span>
                    </div>
                </div>

                <WalletBalance setAddress={setAddress} setBalance={setBalance} setErrorMessage={setErrorMessage} />

                <div className="d-flex align-items-center justify-content-between">
                    <p className="TitleModal">Your Account</p>
                    <span className="account">{address.substring(0, 8)}...{address.substring(30)} </span>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <p className="TitleModal">Balance</p>
                    <span className="money">{balance} ETH</span>
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
