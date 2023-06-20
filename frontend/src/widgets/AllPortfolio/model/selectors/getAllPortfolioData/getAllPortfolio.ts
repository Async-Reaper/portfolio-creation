import {type StateSchema} from "app/providers/StoreProvider";

export const getAllPortfolioData = (state: StateSchema) => state?.allPortfolio?.data;
