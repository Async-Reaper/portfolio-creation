import { type StateSchema } from 'app/providers/StoreProvider';

export const getDeletePortfolioError = (state: StateSchema) => state.signupForm?.error;
