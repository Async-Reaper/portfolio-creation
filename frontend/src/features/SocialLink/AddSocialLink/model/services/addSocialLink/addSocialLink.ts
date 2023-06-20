import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";
import {type SocialLinks} from "entities/SocialLink";

import {addSocialLinkActions} from "../../slice/addSocialLinkSlice";
import {type AddSocialLink} from "../../types/addSocialLink";

export const addSocialLink = createAsyncThunk<any, AddSocialLink, ThunkConfig<string>>(
    'socialLink/addSocialLink',
    async (data, thunkApi) => {

        const { extra, rejectWithValue, dispatch } = thunkApi;

        try {
            const response = await extra.api.post<SocialLinks>('/social-link/', data,{
                headers: {
                    'Authorization': JSON.parse(localStorage.getItem('token') || '')
                }
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(addSocialLinkActions.setLinkData(response.data))

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
