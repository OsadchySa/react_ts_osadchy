import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slice/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {postSlice} from "./slice/postSlice";

export const store = configureStore({
    reducer: {
        userStore: userSlice.reducer,
        postStore: postSlice.reducer
    }
})

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()