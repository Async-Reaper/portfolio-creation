import {type StateSchema} from "app/providers/StoreProvider";

export const getPortfolioData = (state: StateSchema) => state?.portfolio?.data
