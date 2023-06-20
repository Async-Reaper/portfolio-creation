import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {changeEmail, type ChangeEmailSchema} from "features/User/ChangeEmail";

const initialState: ChangeEmailSchema = {
    isLoading: false,
    error: undefined,
    newEmail: '',
}

export const changeEmailSlice = createSlice({
    name: 'user/changeEmail',
    initialState,
    reducers: {
        setNewEmail(state, action: PayloadAction<string>) {
            state.newEmail = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(changeEmail.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(changeEmail.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
        })
        .addCase(changeEmail.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
});

export const { actions: changeEmailActions } = changeEmailSlice;
export const { reducer: changeEmailReducer } = changeEmailSlice;
