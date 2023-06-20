import { type StateSchema } from 'app/providers/StoreProvider';

export const getUserAuthError = (state: StateSchema) => state.user.error;
