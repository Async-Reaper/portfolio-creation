import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";
import {type Portfolio, portfolioActions} from "entities/Portfolio";
import {portfolioUserActions} from "widgets/PortfolioUser";

export const getPortfolioUser = createAsyncThunk<Portfolio[], string, ThunkConfig<any>>
(
    'portfolio/getPortfolioUser',
    async (userId, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Portfolio[]>(`/portfolio/${userId}`);

            if (!response.data) {
                throw new Error();
            }

            dispatch(portfolioUserActions.getPortfolioUser(response.data))
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
