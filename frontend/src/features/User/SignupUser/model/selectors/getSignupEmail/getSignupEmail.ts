import { type StateSchema } from 'app/providers/StoreProvider';

export const getSignupEmail = (state: StateSchema) =>
    state?.signupForm?.email || '';
