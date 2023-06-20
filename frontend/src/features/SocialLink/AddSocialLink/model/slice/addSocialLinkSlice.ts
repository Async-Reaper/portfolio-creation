import {createSlice} from "@reduxjs/toolkit";

import {addSocialLink} from "../services/addSocialLink/addSocialLink";
import {type AddSocialLinkSchema} from "../types/addSocialLink";

const initialState: AddSocialLinkSchema = {
    isLoading: false,
    error: undefined,
    _inited: false,
}


const addSocialLinkSlice = createSlice({
    name: 'socialLink/addSocialLink',
    initialState,
    reducers: {
        setLinkData(state, action) {
            state.data = action.payload
        }
    },
     extraReducers: builder => builder
         .addCase(addSocialLink.pending, (state) => {
             state.isLoading = true
         })
         .addCase(addSocialLink.fulfilled, (state, action) => {
             state.isLoading = false
             // state.data = action.payload
         })
         .addCase(addSocialLink.rejected, (state, action) => {
             state.isLoading = false;
             state.error = action.payload;
         })
})

export const { actions: addSocialLinkActions } = addSocialLinkSlice
export const { reducer: addSocialLinkReducer } = addSocialLinkSlice
