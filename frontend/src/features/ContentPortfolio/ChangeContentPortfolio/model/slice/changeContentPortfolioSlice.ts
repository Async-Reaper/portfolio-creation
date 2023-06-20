import {createSlice} from "@reduxjs/toolkit";

import {changeContentPortfolio} from "../services/changeContentPortfolio/changeContentPortfolio";
import {type ChangeContentPortfolioSchema} from "../types/changeContentPortfolio";

const initialState: ChangeContentPortfolioSchema = {
    isLoading: false,
    error: '',
}

export const changeContentPortfolioSlice = createSlice({
    name: 'contentPortfolio/changeContentPortfolio',
    initialState,
    reducers: {
        changeContentPortfolio(state, action) {
            state.data = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(changeContentPortfolio.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(changeContentPortfolio.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(changeContentPortfolio.rejected, (state, action) => {
            state.error = action.payload;
        })
});

export const { actions: changeContentPortfolioAction } = changeContentPortfolioSlice;
export const { reducer: changeContentPortfolioReducer } = changeContentPortfolioSlice;
