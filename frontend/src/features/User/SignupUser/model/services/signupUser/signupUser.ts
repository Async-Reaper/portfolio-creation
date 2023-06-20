import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    type ThunkConfig,
} from 'app/providers/StoreProvider';
import { type User, userActions } from 'entities/User';

interface SignupByUsernameProps {
    full_name: string;
    password: string;
    email: string;
}
export const signupUser = createAsyncThunk<
    User,
    SignupByUsernameProps,
    ThunkConfig<string>
>('signup/signupUser', async (signupData, thunkApi) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkApi;

    try {
        const response = await extra.api.post<IResponse<User>>(
            '/auth/registration',
            signupData,
        );

        if (!response.data) {
            throw new Error();
        }

        dispatch(userActions.setAuthData(response.data.data));

        return response.data.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
