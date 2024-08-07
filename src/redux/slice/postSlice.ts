import {IPost} from "../../models/IPost";
import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";
import {postService, userService} from "../../services/api.service";
import {AxiosError} from "axios";
import {userSlice} from "./userSlice";

type postSliceType = {
    posts: IPost[],
    error: string,
    post: IPost | null,
    isLoaded: boolean
}

const initState: postSliceType = {
    posts: [],
    error: '',
    post: null,
    isLoaded: false
}



let loadPosts = createAsyncThunk('postSlice/loadPosts', async (_, thunkAPI) => {
    try {
        let psts = await postService.getAll();
        return thunkAPI.fulfillWithValue(psts)
    } catch (e) {
        let error = e as AxiosError
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})

let loadPost = createAsyncThunk('postSlice/loadPost', async (id: number, thunkAPI) => {
    try {
        let pst = await postService.getById(id);
        return thunkAPI.fulfillWithValue(pst)
    } catch (e) {
        let error = e as AxiosError
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})



export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(
                loadPosts.fulfilled,
                (state, action) => {
                    state.posts = action.payload})
            .addCase(loadPost.fulfilled, (state, action) => {
                state.post = action.payload
                state.isLoaded = true
            })
            .addMatcher(isRejected(loadPosts, loadPost), (state, action ) => {
                state.error = action.payload as string

            })
})

export const  postAction = {
    ...postSlice.actions,
    loadPosts,
    loadPost
}