import React from 'react';
import {useParams} from "react-router-dom";
import {Container, HStack, Typography, VStack, Wrapper} from "shared/ui";
import {PortfolioUser} from "widgets/PortfolioUser";
import {Profile} from "widgets/Profile";
import {SocialLinks} from "widgets/SocialLinks";


const UserPage = () => {
    const {id} = useParams();

    return (
            <Container>
                <Wrapper spacingY="32">
                    <VStack gap="32" max>
                        <HStack max justify="between" align="start">
                            <Profile userId={id || ''} />
                            <SocialLinks userId={id || ''} isUpdate={false} />
                        </HStack>
                        <VStack justify="center" align="center" max>
                            <Typography variant="h5" bold color="green">
                                Портфолио пользователя
                            </Typography>
                            <PortfolioUser userId={id || ''} />
                        </VStack>
                    </VStack>
                </Wrapper>
            </Container>
    );
};

export default UserPage;
