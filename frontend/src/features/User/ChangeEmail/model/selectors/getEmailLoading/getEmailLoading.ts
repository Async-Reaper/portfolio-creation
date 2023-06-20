import { type StateSchema } from 'app/providers/StoreProvider';

export const getEmailLoading = (state: StateSchema) =>
    state.changeEmailForm?.isLoading || false;
