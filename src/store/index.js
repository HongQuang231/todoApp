import { configureStore } from "@reduxjs/toolkit";
import changeThemeReducer from "./changeThemeSlice";

export const store = configureStore({
    reducer: {
        changeTheme: changeThemeReducer,
    }
})
