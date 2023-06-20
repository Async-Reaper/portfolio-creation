import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {type Portfolio} from "entities/Portfolio";

import {changePortfolio} from "../services/changePortfolio/changePortfolio";
import {type ChangePortfolioSchema} from "../types/changePortfolio";

const initialState: ChangePortfolioSchema = {
    data: undefined,
    isLoading: false,
    error: '',
}

export const changePortfolioSlice = createSlice({
    name: 'portfolio/changePortfolio',
    initialState,
    reducers: {
        changePortfolio(state, action: PayloadAction<Portfolio>) {
            state.data = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(changePortfolio.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(changePortfolio.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(changePortfolio.rejected, (state, action) => {
            state.error = action.payload;
        })
});

export const { actions: changePortfolioAction } = changePortfolioSlice;
export const { reducer: changePortfolioReducer } = changePortfolioSlice;
