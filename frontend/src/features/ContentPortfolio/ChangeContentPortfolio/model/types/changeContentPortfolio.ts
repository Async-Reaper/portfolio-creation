export interface ChangeContentPortfolio {
    data: any;
    contentId: number;
}

export interface ChangeContentPortfolioSchema {
    data?: ChangeContentPortfolio;
    isLoading: boolean;
    error?: string;
}
