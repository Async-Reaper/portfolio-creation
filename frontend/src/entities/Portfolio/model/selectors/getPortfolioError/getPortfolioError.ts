import {type StateSchema} from "app/providers/StoreProvider";

export const getPortfolioError = (state: StateSchema) => state?.portfolio?.error || '';
