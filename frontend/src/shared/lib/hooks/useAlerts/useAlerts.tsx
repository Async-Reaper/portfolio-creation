import React from 'react';
import { alertsActions } from 'entities/Alerts/model/slice/AlertsSlice';
import { type IAlert } from 'entities/Alerts/model/types/alertsSchema';
import { useAppDispatch } from 'shared/lib/hooks';

export const useAlerts = (alerts: IAlert[]) => {
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (alerts && alerts.length > 0) {
            alerts.map((alert) => {
                dispatch(
                    alertsActions.OPEN_ALERT({
                        id: alert.id,
                        type: alert.type,
                        variant: alert.variant,
                        title: alert.title,
                        text: alert.text,
                        params: {},
                    }),
                );
            });
        }
    }, [alerts]);
};
