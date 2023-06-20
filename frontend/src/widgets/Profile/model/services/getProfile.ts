import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";

import {profileActions, } from "../slice/profileSlice";
import {type ProfileType} from '../types/profile';

export const getProfile = createAsyncThunk<ProfileType, string, ThunkConfig<string>>
(
    'user/getUser',
    async (id, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<ProfileType>(`/users/${id}`);

            if (!response.data) {
                throw new Error();
            }

            dispatch(profileActions.addProfile(response.data))
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
