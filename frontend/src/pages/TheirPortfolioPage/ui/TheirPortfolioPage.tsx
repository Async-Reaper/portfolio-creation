import React from 'react';
import {Container, Typography, Wrapper} from "shared/ui";
import {PortfolioList} from "widgets/PortfolioList";

import cls from "pages/ProfilePage/ui/styles.module.scss";

const TheirPortfolioPage = () => {
    return (
        <Container className={cls.profilePageContainer}>
            <Wrapper spacingY="32">
                <Typography variant="h4" bold color="green">
                    Мои портфолио
                </Typography>
                <PortfolioList/>
            </Wrapper>
        </Container>
    );
};

export default TheirPortfolioPage;
