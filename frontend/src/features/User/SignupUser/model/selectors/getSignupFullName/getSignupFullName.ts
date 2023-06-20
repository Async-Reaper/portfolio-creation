import { type StateSchema } from 'app/providers/StoreProvider';

export const getSignupFullName = (state: StateSchema) =>
    state?.signupForm?.full_name || '';
