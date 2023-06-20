import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";

import {contentPortfolioActions} from "../../slice/contentPortfolioSlice";
import {type ContentPortfolio} from "../../types/contentPortfolio";

export const initContentPortfolio = createAsyncThunk<ContentPortfolio[], string | undefined, ThunkConfig<string>>
(
    'portfolio/initPortfolio',
    async (portfolioId, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<ContentPortfolio[]>(`/content-portfolio/portfolio/${portfolioId}`);

            if (!response.data) {
                throw new Error();
            }

            dispatch(contentPortfolioActions.getContentPortfolio(response.data))
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
