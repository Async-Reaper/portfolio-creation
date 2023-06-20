import { type StateSchema } from 'app/providers/StoreProvider';

export const getCreatePortfolioError = (state: StateSchema) => state.createPortfolioForm?.error;
