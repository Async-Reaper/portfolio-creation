import {type StateSchema} from "app/providers/StoreProvider";

export const getContentPortfolioError = (state: StateSchema) => state.contentPortfolio?.error || '';
