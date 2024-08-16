import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGPT:false
    },
    reducers:{
        toggleGPT:(state,action)=>{
            state.showGPT = !state.showGPT;
        }
    }
})
export const {toggleGPT} = gptSlice.actions;
export default gptSlice.reducer;