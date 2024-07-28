import { createSlice } from '@reduxjs/toolkit';
import { setSelectedProduct } from './productSlice';

const getBasketFromStorage = () => {
    const isExist = localStorage.getItem('basket');
    if (isExist) {
        return JSON.parse(isExist);
    }
    else {
        return [];
    }
}

const initialState = {
    products: getBasketFromStorage(),
    drawer: false,
    totalAmount: 0,
}

const writeFromBasketToStorage = (basket) => {
    localStorage.setItem('basket', JSON.stringify(basket));
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id === action.payload.id)

            if (findProduct) {
                // daha onceden eklenmistir
                const extractedProducts = state.products.filter((product) => product.id != action.payload.id);
                findProduct.count += action.payload.count;
                state.products = [...extractedProducts, findProduct];
                writeFromBasketToStorage(state.products);
            } else {
                state.products = [...state.products, action.payload]
                writeFromBasketToStorage(state.products);
            }
        },
        setDrawer: (state) => {
            state.drawer = !state.drawer
        },
        
        calculateBasket: (state) => {
            state.totalAmount = 0;
            state.products && state.products.map((product) => {
                state.totalAmount += product.price * product.count;
            })
        },

        deleteProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload.id);
            writeFromBasketToStorage(state.products);
        }
    }
})

export const { addToBasket, setDrawer, calculateBasket, deleteProduct } = basketSlice.actions;
export default basketSlice.reducer;