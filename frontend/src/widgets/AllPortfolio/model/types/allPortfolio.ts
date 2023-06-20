import {Portfolio} from "entities/Portfolio";

export interface AllPortfolioSchema {
    data: Portfolio[];
    isLoading: boolean;
    error: string;
}
