import { type StateSchema } from 'app/providers/StoreProvider';

export const getChangeContentPortfolioLoading = (state: StateSchema) =>
    state.contentPortfolio?.isLoading || false;
