import React from 'react'
import './Product.css'
import product_1 from '../../assets/gallery-1.png'
import product_2 from '../../assets/gallery-2.png'
import product_3 from '../../assets/gallery-3.png'
import product_4 from '../../assets/gallery-4.png'

const Product = () => {
  return (
    <div classname='product'>
      <div className="productlist">
        <img src={product_1} alt="" />
        <img src={product_2} alt="" />
        <img src={product_3} alt="" />
        <img src={product_4} alt="" />
      </div>
    </div>
  )
}

export default Product
