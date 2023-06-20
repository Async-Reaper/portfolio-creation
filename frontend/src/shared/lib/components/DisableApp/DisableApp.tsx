import React from 'react';
import { Button, Div, Image, Typography, VStack, Wrapper } from 'shared/ui';

import cls from './styles.module.scss';

const Component = () => {
    const onReloadPage = React.useCallback(() => {
        location.reload();
    }, []);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            onReloadPage();
        }, 10000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <Div className={cls.disablePageContainer}>
            <VStack
                gap="32"
                align="center"
                justify="center"
                className={cls.disablePage}
            >
                <Wrapper max="280">
                    <Image src="/images/common/logo.png" />
                </Wrapper>
                <Typography uppercase variant="h3" bold color="primary-text">
                    Технические работы
                </Typography>
                <div className={cls.disablePage_desc}>
                    <Typography variant="h6">
                        Уважаемые пользователи,
                        <br />в данный момент www.sendigs.com недоступен.
                        <br />
                        Мы проводим технические работы, пожалуйста, приходите
                        позже)
                    </Typography>
                </div>
                <Button onClick={onReloadPage} variant="grey">
                    <Typography variant="h7" bold uppercase>
                        Попробовать снова
                    </Typography>
                </Button>
            </VStack>
        </Div>
    );
};

export const DisableApp = React.memo(Component);
