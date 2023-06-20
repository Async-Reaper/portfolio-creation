import React, {useCallback, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { RoutePath } from 'app/providers/Router/config/routeConfig';
import {getUserAuthData, initAuthData} from 'entities/User';
import {LoginModal} from "features/User/AuthUser";
import {SignupModal} from "features/User/SignupUser";
import {useAppDispatch, useModal} from 'shared/lib/hooks';
import {
    AppLink,
    Avatar,
    Button,
    HStack,
    Image,
    Typography,
    VStack,
    Wrapper,
} from 'shared/ui';
import { Navigation } from 'widgets/Header/ui/Navigation/Navigation';
import {apiUrl} from "shared/lib/const/apiUrl";

const defaultAvatar = '/images/mock/avatar.png'

const Component = () => {
    const auth = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const {
        isOpen: isOpenLoginModal,
        open: openLoginModal,
        close: closeLoginModal,
    } = useModal();
    const {
        isOpen: isOpenSignupModal,
        open: openSignupModal,
        close: closeSignupModal,
    } = useModal();

    const getAuthData = useCallback(  () => {
        dispatch(initAuthData())
    }, [auth])

    useEffect(() => {
        getAuthData()
    }, [])

    return (
        <HStack justify="between">
            <HStack gap="44">
                <AppLink to={RoutePath.main}>
                    <Wrapper max="210">
                        <Image src="/images/common/logo.png" />
                    </Wrapper>
                </AppLink>
                {auth != null && <Navigation />}
            </HStack>

            {auth != null ? (
                <AppLink to={RoutePath.profile}>
                    <HStack gap="8">
                        <Avatar src={auth?.avatar ? `${apiUrl}/${auth.avatar}` : defaultAvatar} size="xs" />
                        <VStack align="end">
                            <Typography variant="h6" bold>
                                {auth.full_name}
                            </Typography>
                        </VStack>
                    </HStack>
                </AppLink>
            ) : (
                <HStack gap="16">
                    <Button
                        size="s"
                        variant="neutral"
                        onClick={openSignupModal}
                    >
                        <Typography variant="h6" bold>
                            Регистрация
                        </Typography>
                    </Button>
                    <Button size="s" onClick={openLoginModal}>
                        <Typography variant="h6" bold>
                            Войти
                        </Typography>
                    </Button>
                </HStack>
            )}

            {isOpenLoginModal && (
                <LoginModal
                    isOpen={isOpenLoginModal}
                    onClose={closeLoginModal}
                />
            )}
            {isOpenSignupModal && (
                <SignupModal
                    isOpen={isOpenSignupModal}
                    onClose={closeSignupModal}
                />
            )}
        </HStack>
    );
};

export const Header = React.memo(Component);
