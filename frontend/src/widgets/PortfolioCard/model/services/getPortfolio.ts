import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";
import {type Portfolio} from "entities/Portfolio";
import {portfolioCardActions} from "widgets/PortfolioCard";

export const getPortfolio = createAsyncThunk<Portfolio, string | undefined, ThunkConfig<string>>
(
    'portfolio/initPortfolio',
    async (id, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Portfolio>(`/portfolio/portfolio/${id}`);

            if (!response.data) {
                throw new Error();
            }

            dispatch(portfolioCardActions.getPortfolioCard(response.data))
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
