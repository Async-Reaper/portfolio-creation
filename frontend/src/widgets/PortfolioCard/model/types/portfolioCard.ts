import {type Portfolio} from "entities/Portfolio";

export interface PortfolioCardSchema {
    data?: Portfolio;
    isLoading: boolean;
    error: string;
}
