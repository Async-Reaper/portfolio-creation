import {createSlice} from "@reduxjs/toolkit";

import {type PortfolioUserSchema} from "../types/portfolioUser";
import {getPortfolioUser} from "widgets/PortfolioUser/model/services/getPortfolioUser";

const initialState: PortfolioUserSchema = {
    data: [],
    error: '',
    isLoading: false
}

const portfolioUserSlice = createSlice({
    name: 'portfolio/portfolioUser',
    initialState,
    reducers: {
        getPortfolioUser(state, action) {
            state.data = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getPortfolioUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getPortfolioUser.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(getPortfolioUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
})

export const {actions: portfolioUserActions} = portfolioUserSlice;
export const {reducer: portfolioUserReducer} = portfolioUserSlice;
