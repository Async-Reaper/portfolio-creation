import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {getPortfolioData, initPortfolio} from "entities/Portfolio";
import {ChangePortfolioModal} from "features/Portfolio/ChangePortfolio";
import {CreatePortfolioModal} from "features/Portfolio/CreatePortfolio";
import {DeletePortfolioModal} from "features/Portfolio/DeletePortfolio";
import {useAppDispatch, useModal} from "shared/lib/hooks";
import {AppLink, Button, HStack, Typography, VStack, Wrapper} from "shared/ui";

import cls from './PortfolioCard.module.scss';

const Component = () => {
    const {isOpen: isOpenDeletePortfolio, open: openDeletePortfolio, close: closeDeletePortfolio} = useModal();
    const {isOpen: isOpenCreatePortfolio, open: openCreatePortfolio, close: closeCreatePortfolio} = useModal();
    const {isOpen: isOpenChangePortfolio, open: openChangePortfolio, close: closeChangePortfolio} = useModal();

    const [portfolioId, setPortfolioId] = useState<number>(1);

    const portfolios = useSelector(getPortfolioData);
    const dispatch = useAppDispatch();

    const onDeletePortfolioId = useCallback((value: number) => {
        openDeletePortfolio();
        setPortfolioId(value);
    }, [setPortfolioId])

    const onChangePortfolioId = useCallback((value: number) => {
        openChangePortfolio();
        setPortfolioId(value);
    }, [setPortfolioId])

    const getPortfolio = useCallback(() => {
        dispatch(initPortfolio())
    }, [dispatch, portfolios])

    useEffect(() => {
        getPortfolio();
    }, [])

    return (
        <Wrapper>
            <VStack gap="8">
                <Button
                    size="xs"
                    onClick={openCreatePortfolio}
                >
                    <Typography variant="h6" bold>
                        Добавить портфолио
                    </Typography>
                </Button>
                <VStack max gap="8">
                    {
                        portfolios?.map((portfolio) =>
                            <HStack
                                justify="between"
                                key={portfolio.id}
                                className={cls.portfolio__link}
                                max
                            >
                                <AppLink to={`/portfolio/${portfolio.id}`}>
                                    <Typography variant="h6" bold>
                                        {portfolio.title}
                                    </Typography>
                                </AppLink>
                                <HStack gap="16">
                                    <Button
                                        size="xs"
                                        variant="neutral"
                                        onClick={() => {
                                            onChangePortfolioId(portfolio.id);
                                        }}
                                    >
                                        <Typography variant="h6">
                                            Редактировать
                                        </Typography>
                                    </Button>
                                    <Button
                                        size="xs"
                                        variant="neutral"
                                        onClick={() => {
                                            onDeletePortfolioId(portfolio.id);
                                        }}
                                    >
                                        <Typography variant="h6">
                                            Удалить
                                        </Typography>
                                    </Button>
                                </HStack>
                            </HStack>
                        )
                    }
                </VStack>
                {
                    isOpenCreatePortfolio &&
                    <CreatePortfolioModal
                        isOpen={isOpenCreatePortfolio}
                        onClose={closeCreatePortfolio}
                    />
                }
                {
                    isOpenDeletePortfolio &&
                    <DeletePortfolioModal
                        isOpen={isOpenDeletePortfolio}
                        onClose={closeDeletePortfolio}
                        portfolioId={portfolioId}
                    />
                }
                {
                    isOpenChangePortfolio &&
                    <ChangePortfolioModal
                        isOpen={isOpenChangePortfolio}
                        onClose={closeChangePortfolio}
                        portfolioId={portfolioId}
                    />
                }
            </VStack>
        </Wrapper>
    );
};

export const PortfolioList = React.memo(Component);
