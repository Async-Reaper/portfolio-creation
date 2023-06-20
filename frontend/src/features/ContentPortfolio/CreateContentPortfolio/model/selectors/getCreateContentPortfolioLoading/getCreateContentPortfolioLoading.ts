import { type StateSchema } from 'app/providers/StoreProvider';

export const getCreateContentPortfolioLoading = (state: StateSchema) =>
    state.createContentPortfolioForm?.isLoading || false;
