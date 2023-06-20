import {createSlice} from "@reduxjs/toolkit";

import {type ChangePasswordSchema} from "../types/changePassword";
import {changePassword} from "features/User/ChangePassword";

const initialState: ChangePasswordSchema = {
    isLoading: false,
    error: '',
}


export const changePasswordSlice = createSlice({
    name: 'user/changePassword',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(changePassword.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(changePassword.fulfilled, (state) => {
            state.isLoading = false
        })
        .addCase(changePassword.rejected, (state, action) => {
            state.error = action.payload
        })
});

export const { actions: changePasswordActions } = changePasswordSlice;
export const { reducer: changePasswordReducer } = changePasswordSlice;
