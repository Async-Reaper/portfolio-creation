import React, {useCallback, useEffect} from 'react';
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/hooks";
import {AppLink, Div, HStack, Typography, VStack} from "shared/ui";

import cls from './AllPortfolio.module.scss';

import {getAllPortfolioData} from "../model/selectors/getAllPortfolioData/getAllPortfolio";
import {getAllPortfolio} from "../model/services/getAllPortfolio";

const Component = () => {

    const dispatch = useAppDispatch();
    const allPortfolio = useSelector(getAllPortfolioData);

    const onGetAllPortfolio = useCallback(() => {
        dispatch(getAllPortfolio());
    }, [dispatch, allPortfolio])

    useEffect(() => {
        onGetAllPortfolio();
    }, [])

    return (
        <Div className={cls.portfolio__list}>
            {allPortfolio?.map(portfolio =>
                <HStack key={portfolio.id} className={cls.portfolio__item}>
                    <VStack gap="16">
                        <Typography variant="h4" color="green">
                            {portfolio.title}
                        </Typography>
                        <Typography variant="h5">
                            {portfolio.description}
                        </Typography>
                        <Typography variant="caption">
                            Кол-во просмотров: {portfolio.count_view}
                        </Typography>
                        <HStack gap="4">
                            <AppLink to={`/portfolio/${portfolio.id}`}>
                                <Typography variant="caption">
                                    перейти к портфолио
                                </Typography>
                            </AppLink>
                            <AppLink to={`/users/${portfolio.userId}`}>
                                <Typography variant="caption">
                                    перейти к пользователю
                                </Typography>
                            </AppLink>
                        </HStack>
                    </VStack>
                </HStack>
            )}
        </Div>
    );
};

export const AllPortfolio = React.memo(Component);
