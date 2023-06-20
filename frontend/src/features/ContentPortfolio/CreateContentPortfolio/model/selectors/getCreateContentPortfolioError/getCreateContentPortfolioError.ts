import { type StateSchema } from 'app/providers/StoreProvider';

export const getCreateContentPortfolioError = (state: StateSchema) => state.createContentPortfolioForm?.error;
