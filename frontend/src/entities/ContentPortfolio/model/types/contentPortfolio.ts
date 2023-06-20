export interface ContentPortfolio {
    id: number;
    img: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export interface ContentPortfolioSchema {
    data?: ContentPortfolio[];
    isLoading: boolean;
    error?: string;
}
