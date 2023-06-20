import {createSlice} from "@reduxjs/toolkit";
import {
    deleteContentPortfolio,
    type DeleteContentPortfolioSchema
} from "features/ContentPortfolio/DeleteContentPortfolio";

const initialState: DeleteContentPortfolioSchema = {
    error: '',
    isLoading: false
}

export const deleteContentPortfolioSlice = createSlice({
    name: 'contentPortfolio/deleteContentPortfolio',
    initialState,
    reducers: {
        deleteContentPortfolio(state, action) {
            state.data = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(deleteContentPortfolio.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteContentPortfolio.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(deleteContentPortfolio.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
});

export const { actions: deleteContentPortfolioActions } = deleteContentPortfolioSlice;
export const { reducer: deleteContentPortfolioReducer } = deleteContentPortfolioSlice;
