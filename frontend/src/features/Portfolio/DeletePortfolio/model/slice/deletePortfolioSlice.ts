import {createSlice} from "@reduxjs/toolkit";
import {type DeleteLinkSchema} from "features/SocialLink/DeleteSocialLink";

import {deletePortfolio} from "../services/deletePortfolio/deletePortfolio";

const initialState: DeleteLinkSchema = {
    error: '',
    isLoading: false
}

export const deletePortfolioSlice = createSlice({
    name: 'portfolio/deletePortfolio',
    initialState,
    reducers: {
        deletePortfolio(state, action) {
            state.data = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(deletePortfolio.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deletePortfolio.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(deletePortfolio.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
});

export const { actions: deletePortfolioActions } = deletePortfolioSlice;
export const { reducer: deletePortfolioReducer } = deletePortfolioSlice;
