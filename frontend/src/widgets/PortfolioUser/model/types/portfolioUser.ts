import {Portfolio} from "entities/Portfolio";

export interface PortfolioUserType extends Portfolio{

}

export interface PortfolioUserSchema {
    data: PortfolioUserType[],
    isLoading: boolean;
    error: string;
}
