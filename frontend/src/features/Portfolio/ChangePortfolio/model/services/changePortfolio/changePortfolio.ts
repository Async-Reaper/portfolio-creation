import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";
import {type Portfolio} from "entities/Portfolio";

import {changePortfolioAction} from "../../slice/changePortfolioSlice";
import {type ChangePortfolioRequest} from "../../types/changePortfolio";

export const changePortfolio = createAsyncThunk<any, ChangePortfolioRequest, ThunkConfig<any>>
(
    'portfolio/changePortfolio',
    async (dataPortfolio, thunkApi) => {
        const {extra, rejectWithValue, dispatch} = thunkApi;

        try {
            const response = await extra.api.put<Portfolio>(`/portfolio/${dataPortfolio.portfolioId}`,
                dataPortfolio.data,{
                headers: {
                    'Authorization': JSON.parse(localStorage.getItem('token') || '')
                }
            });

            if (!response.data) {
                throw new Error();
            }
            console.log(response.data)

            dispatch(changePortfolioAction.changePortfolio(response.data))

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
