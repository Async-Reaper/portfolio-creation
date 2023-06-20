import {createSlice} from "@reduxjs/toolkit";

import {getAllPortfolio} from "../services/getAllPortfolio";
import {type AllPortfolioSchema} from "../types/allPortfolio";

const initialState: AllPortfolioSchema = {
    data: [],
    error: '',
    isLoading: false
}

const allPortfolioSlice = createSlice({
    name: 'portfolio/allPortfolio',
    initialState,
    reducers: {
        getAllPortfolio(state, action) {
            state.data = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAllPortfolio.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllPortfolio.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(getAllPortfolio.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
})

export const {actions: allPortfolioActions} = allPortfolioSlice;
export const {reducer: allPortfolioReducer} = allPortfolioSlice;
