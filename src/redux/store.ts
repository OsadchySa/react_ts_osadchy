import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slice/userSlice";

export const store = configureStore({
    reducer: {
        userStore: userSlice.reducer,
        postStore: postSlice.reducer  //todo 2
    }
})