import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../Redux/Slices/productSlice';
import '../CSS/ProductDetails.css';
import { IoLogoUsd } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasket } from '../Redux/Slices/basketSlice';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const { title, price, image } = selectedProduct
    const [count, setCount] = useState(0);

    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }
    const increaseCount = () => {
        setCount(count + 1);
    }
    const decreaseCount = () => {
        setCount(count - 1);
    }
    const addToCart = () => {
        const payload = {
            id,
            price,
            image,
            title,
            count
        }
        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }
  return (
    <div className='d-flex align-items-center'>
        <div className='product-image'>
            <img src={image} alt="product-image" />
        </div>
        <div>
            <div className='product-title2 mb-2'>
                <h3>{title}</h3>
            </div>
            <div className='prod-price d-flex align-items-center mb-2'>
                <p>{price}</p>
                <IoLogoUsd  className='react-icons prod-price-icon' />
            </div>
            <div className='prod-amount mb-2'>
                <CiCirclePlus className='prod-amount-icon' onClick={increaseCount}/>
                <CiCircleMinus className='prod-amount-icon' onClick={decreaseCount}/>
            </div>
            <div className='product-count mb-2'>
                <p>Product Count: {count}</p>
            </div>
            <div className='add-to-cart'>
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails