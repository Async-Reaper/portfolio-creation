import {createSlice} from "@reduxjs/toolkit";
import {deleteLink, type DeleteLinkSchema} from "features/SocialLink/DeleteSocialLink";

const initialState: DeleteLinkSchema = {
    error: '',
    isLoading: false
}

export const deleteLinkSlice = createSlice({
    name: 'socialLink/deleteLink',
    initialState,
    reducers: {
        deleteLink(state, action) {
            state.data = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(deleteLink.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteLink.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(deleteLink.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
});

export const { actions: deleteLinkActions } = deleteLinkSlice;
export const { reducer: deleteLinkReducer } = deleteLinkSlice;
