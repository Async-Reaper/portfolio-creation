export interface ChangePortfolioRequest {
    data: ChangePortfolioBody
    portfolioId: number;
}

export interface ChangePortfolioBody {
    title: string;
    description: string;
}

export interface ChangePortfolioSchema {
    data?: ChangePortfolioBody;
    isLoading: boolean;
    error?: string;
}
