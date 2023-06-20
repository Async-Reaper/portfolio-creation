import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";
import {type SocialLinks} from "entities/SocialLink";

export const initSocialLink = createAsyncThunk<SocialLinks[], string, ThunkConfig<string>>(
    'socialLink/initSocialLinks',
    async (userId, thunkApi) => {

        const {extra, dispatch, rejectWithValue} = thunkApi;
        try {
            const response = await extra.api.get<SocialLinks[]>(`/social-link/${userId}`);

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
