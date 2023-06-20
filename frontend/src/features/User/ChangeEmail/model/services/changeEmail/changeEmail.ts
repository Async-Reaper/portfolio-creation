import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";

import {type ChangeEmail} from "../../types/changeEmail";
import {changeEmailActions} from "features/User/ChangeEmail";

interface IResponse {
    message: string
}

export const changeEmail = createAsyncThunk<IResponse, ChangeEmail, ThunkConfig<string>>(
    'user/changeEmail',
    async (emailData, thunkApi) => {
        console.log(emailData)
        const {extra, dispatch, rejectWithValue} = thunkApi;
        try {
            const response = await extra.api.put('/users/change-email/', emailData,{
                headers: {
                    'Authorization': JSON.parse(localStorage.getItem('token') || '')
                }
            });
            dispatch(changeEmailActions.setNewEmail(emailData.newEmail));
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
