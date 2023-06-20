import React from 'react';
import {useParams} from "react-router-dom";
import {Container, Wrapper} from "shared/ui";
import {ContentPortfolioList} from "widgets/ContentPortfolioList";
import {PortfolioCard} from "widgets/PortfolioCard";


const PortfolioPage = () => {
    const {id} = useParams();

    return (
        <Container>
            <Wrapper spacingY="32">
                <PortfolioCard portfolioId={id}/>
                <ContentPortfolioList portfolioId={id}/>
            </Wrapper>
        </Container>
    );
};

export default PortfolioPage;
