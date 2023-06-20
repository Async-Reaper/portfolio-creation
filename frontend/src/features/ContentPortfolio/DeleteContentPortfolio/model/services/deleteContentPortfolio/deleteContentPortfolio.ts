import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";

import {deleteContentPortfolioActions} from "../../slice/deleteContentPortfolioSlice";

interface IResponse {
    message: string
}

export const deleteContentPortfolio = createAsyncThunk<any, number, ThunkConfig<string>>
(
    'contentPortfolio/deleteContentPortfolio',
    async (contentId, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.delete<IResponse>(`/content-portfolio/${contentId}`, {
                headers: {
                    'Authorization': JSON.parse(localStorage.getItem('token') || '')
                }
            });

            if (!response.data) {
                throw new Error();
            }
            dispatch(deleteContentPortfolioActions.deleteContentPortfolio(contentId))
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

