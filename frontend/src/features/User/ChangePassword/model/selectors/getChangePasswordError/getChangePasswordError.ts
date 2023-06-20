import { type StateSchema } from 'app/providers/StoreProvider';

export const getChangePasswordError = (state: StateSchema) => state.changePasswordForm?.error;
