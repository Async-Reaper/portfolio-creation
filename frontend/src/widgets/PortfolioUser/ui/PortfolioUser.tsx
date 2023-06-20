import React, {useCallback, useEffect} from 'react';
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/hooks";
import {AppLink, Typography, VStack} from "shared/ui";

import {getPortfolioUserData} from "../model/getPortfolioUserData/getPortfolioUserData";
import {getPortfolioUser} from "../model/services/getPortfolioUser";

interface PortfolioUserProps {
    userId: string;
}

const Component = ({userId}: PortfolioUserProps) => {

    const portfolioUser = useSelector(getPortfolioUserData);
    const dispatch = useAppDispatch();

    const onPortfolioUser = useCallback(() => {
        dispatch(getPortfolioUser(userId))
    }, [portfolioUser])

    useEffect(() => {
        onPortfolioUser()
    }, [])

    return (
        <VStack max gap="8">
            {
                portfolioUser?.map((portfolio) =>
                    <AppLink to={`/portfolio/${portfolio.id}`}>
                        <Typography variant="h6" bold>
                            {portfolio.title}
                        </Typography>
                    </AppLink>
                )
            }
        </VStack>
    );
};

export const PortfolioUser = React.memo(Component);
