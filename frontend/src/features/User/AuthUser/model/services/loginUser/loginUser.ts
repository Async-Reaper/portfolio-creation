import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import axios from 'axios';

import { ValidateAuthFormError } from '../../consts/validateAuthFormErrorConsts';
import { type LoginFormDataProps } from '../../types/loginFormData';
import { validateAuthFormData } from '../validateAuthFormData/validateAuthFormData';

interface IToken {
  token: string;
}

export const loginUser = createAsyncThunk<
    any,
    LoginFormDataProps,
    ThunkConfig<ValidateAuthFormError[]>
>('login/loginUser', async (authData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    const errors = validateAuthFormData(authData);
    if (errors.length > 0) {
        return rejectWithValue(errors);
    }

    try {
        const response = await extra.api.post<IToken>(
            '/auth/login',
            authData,
        );

        const token = response.data.token;

        localStorage.setItem('token', JSON.stringify(token))

        if (!response.data) {
            throw new Error();
        }

    } catch (e) {
        if (axios.isAxiosError(e)) {
            if (e.response) {
                return rejectWithValue(e.response.data.messages);
            }
            if (e.request) {
                return rejectWithValue([ValidateAuthFormError.SERVER_ERROR]);
            }
        }
        return rejectWithValue([ValidateAuthFormError.SERVER_ERROR]);
    }
});
