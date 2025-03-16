import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./ReduxSlice/userSlice";
import moviesReducer from "./ReduxSlice/moviesSlice";

const appStore = configureStore({

    reducer: {
        user: userReducer,
        movies: moviesReducer
    }
});


export default appStore;