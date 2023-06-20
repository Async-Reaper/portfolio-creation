import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";
import {type ContentPortfolio} from "entities/ContentPortfolio";

import {portfolioContentCardActions} from "../slice/portfolioContentCardSlice";

export const getContentPortfolio = createAsyncThunk<ContentPortfolio, number, ThunkConfig<string>>
(
    'portfolio/initPortfolio',
    async (id, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<ContentPortfolio>(`/content-portfolio/${id}`, {
                headers: {
                    'Authorization': JSON.parse(localStorage.getItem('token') || '')
                }
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(portfolioContentCardActions.getContentPortfolioCard(response.data))
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
