import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        add(state, action){
            //redux: return [...state, action.payload] -> creates a copy of state and returns the newarray
            state.push(action.payload); 
            //in Redux Toolkit we are directly mutating the state, but at the backend, it is working the same as in the redux, this is because of createSlice()
        },
        remove(state, action){
            return state.filter(item => item.id !== action.payload); 
            //to remove the item of the particular item id from the cart -> item id will be available from action.payload
        },
    }
})

//export your actions
export const actions = cartSlice.actions;


export default cartSlice.reducer;