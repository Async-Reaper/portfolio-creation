import {type StateSchema} from "app/providers/StoreProvider";

export const getContentPortfolioData = (state: StateSchema) => state.contentPortfolio?.data
