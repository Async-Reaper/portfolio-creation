import {type ContentPortfolio} from "entities/ContentPortfolio";

export interface PortfolioCardSchema {
    data?: ContentPortfolio;
    isLoading: boolean;
    error: string;
}
