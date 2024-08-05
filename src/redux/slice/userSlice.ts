import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";
import {userService} from "../../services/api.service";
import {AxiosError} from "axios";

type UserSliceType = {
    users: IUser[],
    isLoaded: boolean
}

const initialState: UserSliceType = {
    users: [],
    isLoaded: false
}

let loadUsers = createAsyncThunk('useSlice/loadUsers', async (_, thunkAPI) => {
    try {
        let usrs = await userService.getAll();
        return thunkAPI.fulfillWithValue(usrs)
    } catch (e) {
        let error = e as AxiosError
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {state.users = action.payload})
})