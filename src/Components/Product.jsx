import React from 'react'
import { IoLogoUsd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const Product = ({ product }) => {
    
    const { id, title, price, image } = product;

    const navigate = useNavigate();

  return (
    <div className='product-card d-flex justify-content-center'>
        <div className='product-images'>
            <img src={image} alt="product-image" />
            <div>
                <p className='product-title'>{title}</p>
                <div className='d-flex align-items-center'>
                    <h5 className='p-0 m-0'>{price}</h5>
                    <IoLogoUsd  className='react-icons' />
                </div>
            </div>
            <div>
                <button onClick={() => navigate('/product-details/' + id)} className='detail-button'>Go To Detail</button>
            </div>
        </div>
    </div>
  )
}

export default Product