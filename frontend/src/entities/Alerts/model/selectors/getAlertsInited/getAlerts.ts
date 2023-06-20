import { type StateSchema } from 'app/providers/StoreProvider';

export const getAlertsInited = (state: StateSchema) => state?.alerts?._inited;
