import React, {useCallback, useEffect} from 'react';
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/hooks";
import {Typography, VStack} from "shared/ui";

import {getPortfolioCardData} from "../model/selectors/getPortfolioCardData/getPortfolioCardData";
import {getPortfolio} from "../model/services/getPortfolio";

interface PortfolioCardProps {
    portfolioId: string | undefined;
}

const Component = ({portfolioId}: PortfolioCardProps) => {
    const portfolioCard = useSelector(getPortfolioCardData);
    const dispatch = useAppDispatch();

    const getPortfolioCard = useCallback(() => {
        dispatch(getPortfolio(portfolioId))
    }, [dispatch])

    useEffect(() => {
        getPortfolioCard()
    }, [getPortfolioCard])

    return (
        <VStack gap="8">
            <Typography variant="h4" bold>
                Название: {portfolioCard?.title}
            </Typography>
            <Typography variant="h5">
                Описание: {portfolioCard?.description}
            </Typography>
            <Typography variant="h5">
                Кол-во просмотров: {portfolioCard?.count_view}
            </Typography>
        </VStack>
    );
};

export const PortfolioCard = React.memo(Component);
