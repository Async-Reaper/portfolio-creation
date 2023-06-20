import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import cls from './AlertContainer.module.scss';

import { getAlerts } from '../../../model/selectors/getAlerts/getAlerts';
import { alertsActions } from '../../../model/slice/AlertsSlice';
import { DefaultAlert } from '../../Alerts/DefaultAlert/DefaultAlert';

const AlertsContainer = () => {
    const dispatch = useAppDispatch();
    const alerts = useSelector(getAlerts);

    const onCloseHandler = React.useCallback(
        (id: number) => {
            dispatch(alertsActions.CLOSE_ALERT(id));
        },
        [dispatch],
    );

    if (alerts === undefined || alerts.length === 0) {
        return null;
    }

    return (
        <div className={cls.AlertsContainer}>
            {alerts.map((alert) => (
                <DefaultAlert
                    key={alert.id}
                    alert={alert}
                    onCloseHandler={onCloseHandler}
                />
            ))}
        </div>
    );
};

export default AlertsContainer;
