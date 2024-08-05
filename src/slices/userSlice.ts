import {IUser} from "../models/IUser";
import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {userService} from "../services/api.service";
import {AxiosError} from "axios";

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

type UserSliceType = {
    users: IUser[],
    isLoaded: boolean
}

const userInitState: UserSliceType = {
    users: [],
    isLoaded: false
}

export const userSlice = createSlice({
    name: 'usersSlice',
    initialState: userInitState,
    reducers:{},
    extraReducers: (builder) =>
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.isLoaded = true
            })
            .addMatcher(isFulfilled(loadUsers), (state) => {
                //state.isLoaded = true
            })
})

export const userActions = {
    ...userSlice.actions,
    loadUsers
}