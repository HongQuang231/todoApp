import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: "#678c89",
}

export const changeThemeSlice = createSlice({
    name: "changeTheme",
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.color = action.payload;
        }
    }
})

export const {changeTheme} = changeThemeSlice.actions;
export default changeThemeSlice.reducer;