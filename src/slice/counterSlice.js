import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  add: []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addcart:(state,action)=>{
        state.add+=action.payload;
    }
  },
})
// Action creators are generated for each case reducer function
export const { addcart} = counterSlice.actions

export default counterSlice.reducer