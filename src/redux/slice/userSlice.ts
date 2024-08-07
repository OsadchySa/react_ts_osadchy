import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";
import {userService} from "../../services/api.service";
import {AxiosError} from "axios";

type UserSliceType = {
    users: IUser[],
    isLoaded: boolean,
    error: string,
    user: IUser | null
}

const initialState: UserSliceType = {
    users: [],
    isLoaded: false,
    error: '',
    user: null
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
let loadUser = createAsyncThunk('useSlice/loadUser', async (id: number, thunkAPI) => {
    try {
        let usr = await userService.getById(id);
        return thunkAPI.fulfillWithValue(usr)
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
            .addCase(
                loadUsers.fulfilled,
                (state, action) => {
                state.users = action.payload})
            .addCase(loadUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.isLoaded = true
            })
            .addMatcher(isRejected(loadUsers, loadUser), (state, action ) => {
                state.error = action.payload as string

        })
})


export const  userAction = {
    ...userSlice.actions,
    loadUsers,
    loadUser
}
