import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {type Portfolio} from "entities/Portfolio";

import {createPortfolio} from "../services/createPortfolio/createPortfolio";
import {type CreatePortfolioSchema} from "../types/createPortfolio";

const initialState: CreatePortfolioSchema = {
    isLoading: false,
    error: '',
}

export const createPortfolioSlice = createSlice({
    name: 'portfolio/createPortfolio',
    initialState,
    reducers: {
        addPortfolio(state, action: PayloadAction<Portfolio>) {
            state.data = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(createPortfolio.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createPortfolio.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(createPortfolio.rejected, (state, action) => {
            state.error = action.payload;
        })
});

export const { actions: createPortfolioAction } = createPortfolioSlice;
export const { reducer: createPortfolioReducer } = createPortfolioSlice;
