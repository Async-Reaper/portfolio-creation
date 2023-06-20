import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { loginUser } from '../services/loginUser/loginUser';
import { type LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    isLoading: false,
    email: '',
    password: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail(state, action: PayloadAction<Username>) {
            state.email = action.payload;
        },
        setPassword(state, action: PayloadAction<Password>) {
            state.password = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(loginUser.pending, (state) => {
                state.validateError = undefined;
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.validateError = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
