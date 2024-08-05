import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../services/api.service";
import {AxiosError} from "axios";
import {IPost} from "../models/IPost";

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

type PostSliceType = {
    posts: IPost[],
}



const postInitState: PostSliceType = {
    posts: []
}

export const postSlice = createSlice({
    name: 'postsSlice',
    initialState: postInitState,
    reducers:{},
    extraReducers: (builder) => builder.addCase(loadPosts.fulfilled,
        (state, action) => {
            state.posts = action.payload
        })
})
export const postActions = {
    ...postSlice.actions,
    loadPosts
}