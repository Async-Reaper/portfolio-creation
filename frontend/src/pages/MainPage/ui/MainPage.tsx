import React from 'react';
import { useModal } from 'shared/lib/hooks';
import {
    Button,
    Container,
    HStack,
    Image,
    Typography,
    VStack,
    Wrapper,
} from 'shared/ui';

import cls from './styles.module.scss';
import {SignupModal} from "features/User/SignupUser";

const MainPage = () => {
    const {
        isOpen: isOpenSignupModal,
        open: openSignupModal,
        close,
    } = useModal();

    return (
        <Container className={cls.mainPageContainer}>
            <Wrapper className={cls.mainPageContentWrapper}>
                <HStack justify="between">
                    <VStack gap="32">
                        <Typography variant="h1" bold uppercase>
                            Сервис
                            <br />
                            для создания портфолио
                        </Typography>
                        <Typography variant="h5" color="primary-text">
                            Выкладывайте портфолио
                            для поиска работы
                            <br/>
                            или для души
                        </Typography>
                        <Button onClick={openSignupModal}>
                            <Typography variant="h6" bold>
                                Присоединиться
                            </Typography>
                        </Button>
                    </VStack>
                    <Wrapper className={cls.homeImageWrapper}>
                        <Image src="/images/home/home.png" />
                    </Wrapper>
                </HStack>
            </Wrapper>
            {isOpenSignupModal && (
                <SignupModal isOpen={isOpenSignupModal} onClose={close} />
            )}
        </Container>
    );
};

export default MainPage;
