import { type StateSchema } from 'app/providers/StoreProvider';

export const getDeleteContentPortfolioLoading = (state: StateSchema) =>
    state.deleteContentPortfolioForm?.isLoading || false;
