import {type StateSchema} from "app/providers/StoreProvider";

export const getContentPortfolioLoading = (state: StateSchema) => state.contentPortfolio?.isLoading || false;
