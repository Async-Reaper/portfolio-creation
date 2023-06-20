import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";
import {type ContentPortfolio} from "entities/ContentPortfolio";
import {createContentPortfolioAction} from "features/ContentPortfolio/CreateContentPortfolio";

export const createContentPortfolio = createAsyncThunk<any, FormData, ThunkConfig<any>>
(
    'contentPortfolio/createContentPortfolio',
    async (dataContentPortfolio, thunkApi) => {
        const {extra, rejectWithValue, dispatch} = thunkApi;

        try {
            const response = await extra.api.post<ContentPortfolio>('/content-portfolio', dataContentPortfolio,{
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=MyBoundary',
                    'Authorization': JSON.parse(localStorage.getItem('token') || '')
                }
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(createContentPortfolioAction.addContentPortfolio(response.data))

        } catch (e) {
            if (axios.isAxiosError(e)) {
                if (!e.response) {
                    return rejectWithValue('NO_CONNECTION');
                }
            }
            console.log(e)
            return rejectWithValue('error');
        }

    }
)
