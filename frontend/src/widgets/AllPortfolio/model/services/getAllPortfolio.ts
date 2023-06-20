import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";
import {type Portfolio} from "entities/Portfolio";

import {allPortfolioActions} from "../slice/allPortfolioSlice";

export const getAllPortfolio = createAsyncThunk<Portfolio[], void, ThunkConfig<any>>
(
    'portfolio/getAllPortfolio',
    async (_, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Portfolio[]>(`/portfolio`);

            if (!response.data) {
                throw new Error();
            }

            dispatch(allPortfolioActions.getAllPortfolio(response.data))
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
