import { type StateSchema } from 'app/providers/StoreProvider';

export const getDeletePortfolioLoading = (state: StateSchema) =>
    state.signupForm?.isLoading || false;
