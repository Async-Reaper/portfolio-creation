import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { signupUser } from '../services/signupUser/signupUser';
import { type SignupSchema } from '../types/SignupSchema';

const initialState: SignupSchema = {
    isLoading: false,
    full_name: '',
    password: '',
    email: '',
};

export const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        setLogin(state, action: PayloadAction<Username>) {
            state.full_name = action.payload;
        },
        setPassword(state, action: PayloadAction<Password>) {
            state.password = action.payload;
        },
        setEmail(state, action: PayloadAction<Email>) {
            state.email = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(signupUser.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(signupUser.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: signupActions } = signupSlice;
export const { reducer: signupReducer } = signupSlice;
