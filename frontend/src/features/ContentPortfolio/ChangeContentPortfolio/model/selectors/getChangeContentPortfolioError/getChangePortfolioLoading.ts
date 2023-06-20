import { type StateSchema } from 'app/providers/StoreProvider';

export const getChangePortfolioError = (state: StateSchema) => state.contentPortfolio?.error;
