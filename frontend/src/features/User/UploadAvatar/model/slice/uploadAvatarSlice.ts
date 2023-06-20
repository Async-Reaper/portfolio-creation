import {createSlice} from "@reduxjs/toolkit";

import {type UploadAvatarSchema} from "../types/uploadPortfolio";

const initialState: UploadAvatarSchema = {
    error: '',
    isLoading: false,
}

export const uploadAvatarSlice = createSlice({
    name: 'user/uploadAvatar',
    initialState,
    reducers: {
        setAvatar(state, action) {
            state.data = action.payload
        }
    },
    extraReducers: builder => builder
});

export const {actions: uploadAvatarActions} = uploadAvatarSlice;
export const {reducer: uploadAvatarReducer} = uploadAvatarSlice;
