import React from 'react';
import { alertsActions } from 'entities/Alerts/model/slice/AlertsSlice';
import { useAppDispatch } from 'shared/lib/hooks';

declare interface UseErrors<T> {
    title: string;
    errors: T[] | undefined;
}
export function useErrors<T>({ title, errors }: UseErrors<T>) {
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (errors != null && errors.length > 0) {
            errors.map((error) => {
                dispatch(
                    alertsActions.OPEN_ALERT({
                        id: errors.length,
                        type: 'error',
                        variant: '',
                        title,
                        text: error as string,
                        params: {},
                    }),
                );
            });
        }
    }, [errors]);
}
