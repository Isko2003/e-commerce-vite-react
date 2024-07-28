import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../Redux/Slices/appSlice';
import productReducer from '../Redux/Slices/productSlice';
import basketReducer from './Slices/basketSlice';
export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer,
        basket: basketReducer,
    },
})

export default store;