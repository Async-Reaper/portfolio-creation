import {createSlice} from "@reduxjs/toolkit";

import {getProfile} from "../services/getProfile";
import {type ProfileSchema} from "../types/profile";

const initialState: ProfileSchema = {
    isLoading: false,
    error: ''
}

const profileSlice = createSlice({
    name: 'user/profile',
    initialState,
    reducers: {
        addProfile(state, action) {
            state.data = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getProfile.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getProfile.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(getProfile.rejected, (state, action: any) => {
            state.isLoading = true;
            state.error = action.payload
        })
})

export const {actions: profileActions} = profileSlice;
export const {reducer: profileReducer} = profileSlice;
