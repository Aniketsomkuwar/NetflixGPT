import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: {}
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        }
    }


})

// export Actions
export const { addNowPlayingMovies } = moviesSlice.actions;

// export Reducer
export default moviesSlice.reducer;




