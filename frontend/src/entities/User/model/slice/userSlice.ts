import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {initAuthData} from 'entities/User/model/services/initAuthData/initAuthData';
import {USER_LOCALSTORAGE_TOKEN} from 'shared/lib/const/localStorageKeys';

import {type User, type UserSchema} from '../types/user';

const initialState: UserSchema = {
    isLoading: false,
    error: undefined,
    _inited: false,
};

export const userSlice = createSlice({
    name: 'socialLink',
    initialState,
    reducers: {
        setAuthData(state, action: PayloadAction<User>) {
            state.authData = action.payload;
        },
        logout(state) {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_TOKEN);
        }
    },
    extraReducers(builder) {
        builder
            .addCase(initAuthData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                initAuthData.fulfilled,
                (state, action: PayloadAction<User>) => {
                    state.isLoading = false;
                    state.authData = action.payload;

                    state._inited = true;
                },
            )
            .addCase(initAuthData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state._inited = true;
            })
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
