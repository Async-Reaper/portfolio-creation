export type AlertType = 'success' | 'error' | 'info';

export type INotificationParams = Record<string, string>;

export type AlertVariants = '';

export interface IAlert {
    id: number;
    variant: AlertVariants;
    type: AlertType;
    title: string;
    text: string;
    params?: INotificationParams;
}

export interface AlertSchema {
    alerts: IAlert[];
    _inited: boolean;
}
