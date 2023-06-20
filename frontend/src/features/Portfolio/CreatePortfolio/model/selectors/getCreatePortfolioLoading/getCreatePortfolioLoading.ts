import { type StateSchema } from 'app/providers/StoreProvider';

export const getCreatePortfolioLoading = (state: StateSchema) =>
    state.createPortfolioForm?.isLoading || false;
