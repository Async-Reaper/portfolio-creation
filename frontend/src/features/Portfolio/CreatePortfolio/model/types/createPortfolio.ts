export interface CreatePortfolio {
    title: string;
    description: string;
    userId: number;
}

export interface CreatePortfolioSchema {
    data?: CreatePortfolio;
    isLoading: boolean;
    error?: string;
}
