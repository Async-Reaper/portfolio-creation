import React from 'react';
import {DynamicModuleLoader, type ReducersList} from "shared/lib/components";
import {Container, Wrapper} from "shared/ui";
import {AllPortfolio,allPortfolioReducer} from "widgets/AllPortfolio";

const reducers: ReducersList = {
    allPortfolio: allPortfolioReducer
}

const AllPortfolioPage = () => {
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Container>
                <Wrapper spacingY="32">
                    <AllPortfolio />
                </Wrapper>
            </Container>
        </DynamicModuleLoader>
    );
};

export default AllPortfolioPage;
