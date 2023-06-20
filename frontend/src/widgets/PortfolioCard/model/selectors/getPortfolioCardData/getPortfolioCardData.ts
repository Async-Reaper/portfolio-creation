import {type StateSchema} from "app/providers/StoreProvider";

export const getPortfolioCardData = (state: StateSchema) => state.portfolioCard?.data
