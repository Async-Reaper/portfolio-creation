import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {type ContentPortfolio} from "entities/ContentPortfolio";

import {createContentPortfolio} from "../services/createContentPortfolio/createContentPortfolio";
import { type CreateContentPortfolioSchema} from "../types/createContentPortfolio";

const initialState: CreateContentPortfolioSchema = {
    isLoading: false,
    error: '',
}

export const createContentPortfolioSlice = createSlice({
    name: 'contentPortfolio/createContentPortfolio',
    initialState,
    reducers: {
        addContentPortfolio(state, action: PayloadAction<ContentPortfolio>) {
            state.data = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(createContentPortfolio.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createContentPortfolio.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(createContentPortfolio.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
});

export const { actions: createContentPortfolioAction } = createContentPortfolioSlice;
export const { reducer: createContentPortfolioReducer } = createContentPortfolioSlice;
