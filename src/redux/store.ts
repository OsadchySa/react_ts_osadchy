import {configureStore, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../models/IUser";

type UserSliceType = {
    users: IUser[],
    isLoaded: boolean
}

const userInitState:UserSliceType = {
    users:[],
    isLoaded:false
}

const userSlice = createSlice({
    name: 'usersSlice',
    initialState: userInitState,
    reducers:{}
})
export const store = configureStore({
    reducer:{
        userSlice: userSlice.reducer,
        //postSlice: postSlice.reducer
    }
})