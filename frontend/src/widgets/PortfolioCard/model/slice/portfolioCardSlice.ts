import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

import {getPortfolio} from "../services/getPortfolio";
import {type PortfolioCardSchema} from "../types/portfolioCard";

const initialState: PortfolioCardSchema = {
    isLoading: false,
    error: ''
}

const portfolioCardSlice = createSlice({
    name: 'portfolio/portfolioCard',
    initialState,
    reducers: {
        getPortfolioCard(state, action) {
            state.data = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getPortfolio.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getPortfolio.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(getPortfolio.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = action.payload;
        })
})

export const { actions: portfolioCardActions } = portfolioCardSlice;
export const { reducer: portfolioCardReducer } = portfolioCardSlice;
