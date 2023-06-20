import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";
import {type ContentPortfolio} from "entities/ContentPortfolio";
import {changeContentPortfolioAction} from "features/ContentPortfolio/ChangeContentPortfolio";

import {type ChangeContentPortfolio} from "../../types/changeContentPortfolio";

export const changeContentPortfolio = createAsyncThunk<any, ChangeContentPortfolio, ThunkConfig<any>>
(
    'contentPortfolio/changeContentPortfolio',
    async (dataPortfolio, thunkApi) => {
        const {extra, rejectWithValue, dispatch} = thunkApi;

        try {
            const response = await extra.api.put<ContentPortfolio>(`/content-portfolio/${dataPortfolio.contentId}`,
                dataPortfolio.data,{
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=MyBoundary',
                    'Authorization': JSON.parse(localStorage.getItem('token') || '')
                }
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(changeContentPortfolioAction.changeContentPortfolio(response.data))

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
