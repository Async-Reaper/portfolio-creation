import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";
import {deletePortfolioActions} from "features/Portfolio/DeletePortfolio";

interface IResponse {
    message: string
}

export const deletePortfolio = createAsyncThunk<any, number, ThunkConfig<string>>
(
    'portfolio/deletePortfolio',
    async (portfolioId, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.delete<IResponse>(`/portfolio/${portfolioId}`, {
                headers: {
                    'Authorization': JSON.parse(localStorage.getItem('token') || '')
                }
            });
            dispatch(deletePortfolioActions.deletePortfolio(portfolioId))
            if (!response.data) {
                throw new Error();
            }

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
