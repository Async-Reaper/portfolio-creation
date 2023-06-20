import { type StateSchema } from 'app/providers/StoreProvider';

export const getSignupIsLoading = (state: StateSchema) =>
    state.signupForm?.isLoading || false;
