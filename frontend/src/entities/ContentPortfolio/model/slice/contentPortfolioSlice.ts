import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

import {initContentPortfolio} from "../services/initContentPortfolio/initContentPortfolio";
import {type ContentPortfolio, type ContentPortfolioSchema} from "../types/contentPortfolio";
import {createContentPortfolioAction} from "features/ContentPortfolio/CreateContentPortfolio";
import {changeContentPortfolioAction} from "features/ContentPortfolio/ChangeContentPortfolio";
import {deleteContentPortfolioActions} from "features/ContentPortfolio/DeleteContentPortfolio";

const initialState: ContentPortfolioSchema = {
    data: [],
    isLoading: false,
    error: ''
}

const contentPortfolioSlice = createSlice({
    name: 'contentPortfolio/initContentPortfolio',
    initialState,
    reducers: {
        getContentPortfolio(state, action: PayloadAction<ContentPortfolio[]>) {
            state.data = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(initContentPortfolio.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(initContentPortfolio.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(initContentPortfolio.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        })
        .addCase(createContentPortfolioAction.addContentPortfolio, (state, action) => {
            state?.data?.push(action.payload)
        })
        .addCase(changeContentPortfolioAction.changeContentPortfolio, (state, action) => {
            state.data = state?.data?.map(port => port.id === action.payload.id ? action.payload : port);
        })
        .addCase(deleteContentPortfolioActions.deleteContentPortfolio, (state, action) => {
            state.data = state?.data?.filter(content => content.id !== action.payload)
        })

})

export const {actions: contentPortfolioActions} = contentPortfolioSlice;
export const {reducer: contentPortfolioReducer} = contentPortfolioSlice;
