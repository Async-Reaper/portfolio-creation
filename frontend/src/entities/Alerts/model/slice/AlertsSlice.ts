import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type AlertSchema, type IAlert } from '../types/alertsSchema';

const initialState: AlertSchema = {
    alerts: [],
    _inited: false,
};

export const alertsSlice = createSlice({
    name: 'alerts',
    initialState,
    reducers: {
        OPEN_ALERT(state, action: PayloadAction<IAlert>) {
            state.alerts = [
                {
                    id:
                        state.alerts.reduce(
                            (maxId: number, alertState: { id: number }) =>
                                alertState.id > maxId ? alertState.id : maxId,
                            0,
                        ) + 1,
                    variant: action.payload.variant,
                    type: action.payload.type,
                    title: action.payload.title,
                    text: action.payload.text,
                    // @ts-expect-error
                    params: action.payload.params != null || {},
                },
                ...state.alerts,
            ];
        },
        CLOSE_ALERT(state, action) {
            state.alerts = state.alerts.filter(
                (alertState) => alertState.id !== action.payload,
            );
        },
        SET_INITED_ALERT(state, action: PayloadAction<boolean>) {
            state._inited = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: alertsActions } = alertsSlice;
export const { reducer: alertsReducer } = alertsSlice;
