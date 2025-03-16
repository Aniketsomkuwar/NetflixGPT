import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({

    name: 'user',
    initialState: null,
    reducers: {
        pushUserData: (state, action) => {
            return action.payload;
        },

        removeUserData: (state, action) => {
            return null;
        }

    }

})

export default userSlice.reducer;

export const { pushUserData, removeUserData } = userSlice.actions;