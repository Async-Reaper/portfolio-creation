import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

import {getContentPortfolio} from "../services/getContentPortfolio";
import {type PortfolioCardSchema} from "../types/portfolioCard";

const initialState: PortfolioCardSchema = {
    isLoading: false,
    error: ''
}

const portfolioContentCardSlice = createSlice({
    name: 'portfolio/portfolioCard',
    initialState,
    reducers: {
        getContentPortfolioCard(state, action) {
            state.data = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getContentPortfolio.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getContentPortfolio.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(getContentPortfolio.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = action.payload;
        })
})

export const { actions: portfolioContentCardActions } = portfolioContentCardSlice;
export const { reducer: portfolioContentCardReducer } = portfolioContentCardSlice;
