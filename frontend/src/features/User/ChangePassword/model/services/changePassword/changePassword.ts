import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";

import {type ChangePassword} from "../../types/changePassword";

interface IResponse {
    message: string;
}

export const changePassword = createAsyncThunk<IResponse, ChangePassword, ThunkConfig<string>>(
    'user/changeEmail',
    async (passwordData, thunkApi) => {

        const {extra, dispatch, rejectWithValue} = thunkApi;
        try {
            const response = await extra.api.put('/users/change-password/', passwordData,{
                headers: {
                    'Authorization': JSON.parse(localStorage.getItem('token') || '')
                }
            });

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

