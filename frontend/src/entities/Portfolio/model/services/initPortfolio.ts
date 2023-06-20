import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";

import {portfolioActions} from "../slice/portfolioSlice";
import {type Portfolio} from "../types/portfolio";

export const initPortfolio = createAsyncThunk<Portfolio[], void, ThunkConfig<string>>
(
    'portfolio/initPortfolio',
    async (_, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Portfolio[]>('/portfolio/user', {
                headers: {
                    'Authorization': JSON.parse(localStorage.getItem('token') || '')
                }
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(portfolioActions.getPortfolioUser(response.data))
            return response.data;
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
