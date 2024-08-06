import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './ProductDetail.css';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    const item = {
        title: searchParams.get('title') || 'Default Title',
        currentBid: searchParams.get('currentBid') || '0',
        imgUrl: searchParams.get('imgUrl') || 'default_image_url.jpg',
        creator: searchParams.get('creator') || 'Unknown Creator',
        startDate: searchParams.get('startDate') || 'Unknown',
        endDate: searchParams.get('endDate') || 'Unknown',
        description: searchParams.get('description') || 'Unknown'
    };

    const { title, currentBid, imgUrl, creator, startDate, endDate, description } = item;

    return (
        <div>
            <Navbar />
            <div className="productdisplay">
                <div className="productdisplay-left">
                    <div className="productdisplay-img-list">
                        <img src={imgUrl} alt="" />
                        <img src={imgUrl} alt="" />
                        <img src={imgUrl} alt="" />
                        <img src={imgUrl} alt="" />
                    </div>
                    <div className="productdisplay-img">
                        <img className="productdisplay-main-img" src={imgUrl} alt="" />
                    </div>
                </div>
                <div className="productdisplay-right">
                    <h1>{title}</h1>
                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-owneraddress">
                        <span className="title-name">Highest Bid Address:</span> {creator}
                        </div>
                        <div className="productdisplay-right-price">
                            <span className="title-name">Highest Bid:</span> {currentBid} ETH
                        </div>
                    </div>
                    <div className="productdisplay-right-description">
                       <p>{description}</p>
                    </div>
                </div>
            </div>

            <div className="product-history-bidding">
                <h1>History Bidding - {title} (TBA Feature)</h1>

            </div>
        </div>
    );
};

export default ProductDetail;
