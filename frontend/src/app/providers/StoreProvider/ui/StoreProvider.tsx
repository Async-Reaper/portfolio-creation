import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { type ReducersMapObject } from '@reduxjs/toolkit';
import {
    createReduxStore,
    type StateSchema,
} from 'app/providers/StoreProvider';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
    );

    return (
        <Provider store={store}>
            {/* @ts-expect-error */}
            {children}
        </Provider>
    );
};
