import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../Redux/Slices/productSlice';
import Product from './Product';
const ProductList = () => {

  const { products } = useSelector((store) => store.product)

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getAllProducts());
  }, [])

  return (
    <div className='d-flex flex-wrap gap-3 justify-content-center'>
      {
        products && products.map((product) => (
          <Product key={product.id} product = {product} />
        ))
      }
    </div>
  )
}

export default ProductList