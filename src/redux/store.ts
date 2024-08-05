import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../models/IUser";
import {postService, userService} from "../services/api.service";
import {AxiosError} from "axios";
import {useDispatch, useSelector} from "react-redux";
import {IPost} from "../models/IPost";

type UserSliceType = {
    users: IUser[],
    isLoaded: boolean
}
type PostSliceType = {
    posts: IPost[],
}


const userInitState: UserSliceType = {
    users: [],
    isLoaded: false
}
const postInitState: PostSliceType = {
    posts: []
}



const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            let response = await userService.getAll()
            return thunkAPI.fulfillWithValue(response)
        } catch (e) {
            let e1 = e as AxiosError;
            return thunkAPI.rejectWithValue(e1)
        }
    }
)
const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            let response = await postService.getAll()
            return thunkAPI.fulfillWithValue(response)
        } catch (e) {
            let e1 = e as AxiosError;
            return thunkAPI.rejectWithValue(e1)
        }
    }
)




const userSlice = createSlice({
    name: 'usersSlice',
    initialState: userInitState,
    reducers:{},
    extraReducers: (builder) => builder.addCase(loadUsers.fulfilled,
        (state, action) => {
        state.users = action.payload
})
})
const postSlice = createSlice({
    name: 'postsSlice',
    initialState: postInitState,
    reducers:{},
    extraReducers: (builder) => builder.addCase(loadPosts.fulfilled,
        (state, action) => {
            state.posts = action.payload
        })
})




export const userActions = {
    ...userSlice.actions,
    loadUsers
}
export const postActions = {
    ...postSlice.actions,
    loadPosts
}



export const store = configureStore({
    reducer:{
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer
    }
})


export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()