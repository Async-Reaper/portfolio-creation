import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";
import {type Portfolio} from "entities/Portfolio";
import {createPortfolioAction} from "features/Portfolio/CreatePortfolio/model/slice/createPortfolioSlice";

import {type CreatePortfolio} from "../../types/createPortfolio";

export const createPortfolio = createAsyncThunk<any, CreatePortfolio, ThunkConfig<any>>
(
    'portfolio/createPortfolio',
    async (dataPortfolio, thunkApi) => {
        const {extra, rejectWithValue, dispatch} = thunkApi;

        try {
            const response = await extra.api.post<Portfolio>('/portfolio', dataPortfolio,{
                headers: {
                    'Authorization': JSON.parse(localStorage.getItem('token') || '')
                }
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(createPortfolioAction.addPortfolio(response.data))

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
