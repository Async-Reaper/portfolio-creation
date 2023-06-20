import {ContentPortfolio} from "entities/ContentPortfolio";

export interface CreateContentPortfolio {
    img: string;
    description: string;
    portfolioId: string | undefined;
}

export interface CreateContentPortfolioSchema {
    data?: ContentPortfolio;
    isLoading: boolean;
    error?: string;
}
