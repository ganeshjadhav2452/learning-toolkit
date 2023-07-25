
import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name:'name',
    initialState:{
        cartArray:[]
    },
    reducers:{
       add(state,action){
       state.cartArray.push(action.payload)
      
       }
    }
})

const cartReducer = cart.reducer;
export const {add} = cart.actions
export default cartReducer