import { configureStore } from '@reduxjs/toolkit';
import CustomerSlice from './Slice/CustomerSlice';

export const Store = configureStore({
    devTools: false,
    reducer:{
        customer : CustomerSlice
    }
})