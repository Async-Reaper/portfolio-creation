import React, { memo } from 'react';
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Portal } from 'shared/ui/Primitives/Portal/Portal';

import { alertsReducer } from '../../model/slice/AlertsSlice';

import AlertsContainer from './AlertContainer/AlertsContainer';

const initialReducers: ReducersList = {
    alerts: alertsReducer,
};

const AlertsSystem = memo(() => (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
        <Portal>
            <AlertsContainer />
        </Portal>
    </DynamicModuleLoader>
));

export default AlertsSystem;
