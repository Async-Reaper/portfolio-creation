import { type StateSchema } from 'app/providers/StoreProvider';

export const getAlerts = (state: StateSchema) => state?.alerts?.alerts;
