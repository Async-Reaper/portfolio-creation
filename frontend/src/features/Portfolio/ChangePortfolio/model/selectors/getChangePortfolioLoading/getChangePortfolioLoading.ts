import { type StateSchema } from 'app/providers/StoreProvider';

export const getChangePortfolioLoading = (state: StateSchema) =>
    state.changePortfolioForm?.isLoading || false;
