import { type StateSchema } from 'app/providers/StoreProvider';

export const getDeleteContentPortfolioError = (state: StateSchema) => state.deleteContentPortfolioForm?.error;
