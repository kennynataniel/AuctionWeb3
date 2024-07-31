import React from 'react'
import ethImg from '../../assets/ETH.png'
import {Link} from 'react-router-dom'

const Productcard = (props) => {

  const {title, id, currentBid, creatorImg, imgUrl, creator } = props.item

  return <div className="single__nft__card">
  <div className="ntf__img">
    <img src={imgUrl} alt="" className= "w-100" />
  </div>

  <div className="nft__content">
    <h5 className="nft__title">{title}</h5>

    <div className="creator__info-wrapper d-flex gap-3">
      <div className="creator__img">
        <img src={creatorImg} alt="" className="w-100" />
      </div>
      <div className="creator__info w-100 d-flex align-items-center justify-content-between">
        <div>
          <h6>Created By</h6>
          <p>{creator}</p>
        </div>

        <div>
          <h6>Current Bid</h6>
          <p>{currentBid} <img className="ethimg" src={ethImg} alt="" /></p>
        </div>
      </div>
    </div>

    <div className="mt-3 d-flex align-items-center justify-content-between">
        <button className="bid__btn d-flex align-items-center gap-1">
          <i class="ri-shopping-bag-line"></i>Place Bid
        </button>
    </div>
  </div>
</div>
}

export default Productcard
