import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {changePortfolioAction} from "features/Portfolio/ChangePortfolio/model/slice/changePortfolioSlice";
import {createPortfolioAction} from "features/Portfolio/CreatePortfolio";
import {deletePortfolioActions} from "features/Portfolio/DeletePortfolio";

import {initPortfolio} from "../services/initPortfolio";
import {type Portfolio, type PortfolioSchema} from "../types/portfolio";

const initialState: PortfolioSchema = {
    data: [],
    error: '',
    isLoading: false
}

const portfolioSlice = createSlice({
    name: 'portfolio/initPortfolio',
    initialState,
    reducers: {
        getPortfolioUser(state, action: PayloadAction<Portfolio[]>) {
            state.data = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(initPortfolio.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(initPortfolio.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(initPortfolio.rejected, (state, action: PayloadAction<string | any>) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(createPortfolioAction.addPortfolio, (state, action) => {
            state?.data?.push(action.payload)
        })
        .addCase(changePortfolioAction.changePortfolio, (state, action) => {
            state.data = state.data.map(port => port.id === action.payload.id ? action.payload : port);
        })
        .addCase(deletePortfolioActions.deletePortfolio, (state, action) => {
            state.data = state?.data?.filter(portfolio => portfolio.id !== action.payload)
        })
})

export const {actions: portfolioActions} = portfolioSlice;
export const {reducer: portfolioReducer} = portfolioSlice
