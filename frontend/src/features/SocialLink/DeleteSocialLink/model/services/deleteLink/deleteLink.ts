import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";

interface IResponse {
    message: string
}

export const deleteLink = createAsyncThunk<any, number, ThunkConfig<string>>(
    'socialLink/addSocialLink',
    async (id, thunkApi) => {

        const { extra, rejectWithValue, dispatch } = thunkApi;

        try {
            const response = await extra.api.delete<IResponse>(`/social-link/${id}`, {
                headers: {
                    'Authorization': JSON.parse(localStorage.getItem('token') || '')
                }
            });

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

