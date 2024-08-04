import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRated:null,
        upComing:null,
        trailer:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRated:(state,action)=>{
            state.topRated = action.payload;
        },
        addUpComing:(state,action)=>{
            state.upComing = action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailer = action.payload
        }
    }
})

export const {addNowPlayingMovies,addPopularMovies,addTopRated,addUpComing, addTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;