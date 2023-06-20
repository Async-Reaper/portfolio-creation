import { type StateSchema } from 'app/providers/StoreProvider';

export const getChangePasswordLoading = (state: StateSchema) =>
    state.changePasswordForm?.isLoading || false;
