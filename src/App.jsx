import { useEffect, useState } from 'react'
import './App.css';
import PageContainer from './Container/PageContainer';
import Header from './Components/Header';
import RouterConfig from './Config/RouterConfig';
import Loading from './Components/Loading';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateBasket, deleteProduct, setDrawer } from './Redux/Slices/basketSlice';

function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateBasket());
  }, [])

  const handleDelete = (productId) => {
    dispatch(deleteProduct({id: productId}));
    dispatch(calculateBasket());
  }

  return (
    <div>
      <PageContainer>
        <Loading /> 
        <Header />
        <RouterConfig />
        <Drawer anchor='right' open={drawer} onClose={() => dispatch(setDrawer())}>
          {
            products && products.map((product) => {
              return (
                <div key={product.id} className='d-flex flex-row' style={{padding: '20px'}}>
                  <img style={{marginRight: '5px'}} src={product.image} width={50} height={50}/>
                  <p className='drawer-title' style={{width: '320px', marginRight: '5px'}}>{product.title} ({product.count})</p>
                  <p style={{fontWeight: 'bold', marginRight: '10px', width: '60px'}}>{product.price}TL</p>
                  <button className='drawer-button' onClick={() => handleDelete(product.id)}>Delete</button>
                </div>
              )
            })
          }
          <div>
            <p style={{textAlign: 'center'}}>Total Amount: {totalAmount}</p>
          </div>
        </Drawer>
      </PageContainer>
    </div>
  )
}

export default App
