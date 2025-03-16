import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: {},
        popularMovies: {},
        upcomingMovies: {}
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        }
    }


})

// export Actions
export const { addNowPlayingMovies, addPopularMovies, addUpcomingMovies } = moviesSlice.actions;

// export Reducer
export default moviesSlice.reducer;




