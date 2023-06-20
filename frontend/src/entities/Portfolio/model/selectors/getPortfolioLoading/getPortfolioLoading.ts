import {StateSchema} from "app/providers/StoreProvider";

export const getPortfolioLoading = (state: StateSchema) => state.portfolio?.isLoading || false;
