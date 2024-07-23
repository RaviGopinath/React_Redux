import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const customerSlice = createSlice({
    name : 'customer',
    initialState : initialState,
    reducers: {

        addCustomer(state, action){
            state.push(action.payload);
        },

        deleteCustomer(state, action){
            const customerIndex = action.payload;
            return state.filter((val, index)=> index !== customerIndex);
        }
    }
})

export const { addCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;