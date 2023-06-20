import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";

export const uploadAvatar = createAsyncThunk<any, FormData, ThunkConfig<any>>
(
    'contentPortfolio/createContentPortfolio',
    async (dataAvatar, thunkApi) => {
        const {extra, rejectWithValue, dispatch} = thunkApi;

        try {
            const response = await extra.api.post('/users/upload-avatar', dataAvatar,{
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=MyBoundary',
                    'Authorization': JSON.parse(localStorage.getItem('token') || '')
                }
            });

            if (!response.data) {
                throw new Error();
            }


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
