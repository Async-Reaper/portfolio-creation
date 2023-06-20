export interface Portfolio {
    id: number;
    title: string;
    description: string;
    userId: number;
    count_view: number;
    createdAt: string;
    updatedAt: string;
}

export interface PortfolioSchema {
    data: Portfolio[];
    isLoading: boolean;
    error: string;
}
