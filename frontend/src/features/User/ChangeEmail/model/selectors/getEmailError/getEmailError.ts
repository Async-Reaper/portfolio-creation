import { type StateSchema } from 'app/providers/StoreProvider';

export const getEmailError = (state: StateSchema) => state.changeEmailForm?.error;
