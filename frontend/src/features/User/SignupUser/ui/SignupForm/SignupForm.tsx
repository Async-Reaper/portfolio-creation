import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components';
import { useAppDispatch } from 'shared/lib/hooks';
import { Button, Image, Input, Typography, VStack, Wrapper } from 'shared/ui';

import cls from './styles.module.scss';

import { getSignupEmail } from '../../model/selectors/getSignupEmail/getSignupEmail';
import { getSignupFullName } from '../../model/selectors/getSignupFullName/getSignupFullName';
import { getSignupIsLoading } from '../../model/selectors/getSignupIsLoading/getSignupIsLoading';
import { getSignupPassword } from '../../model/selectors/getSignupPassword/getSignupPassword';
import { signupUser } from '../../model/services/signupUser/signupUser';
import { signupActions, signupReducer } from '../../model/slices/signupSlice';

export interface SignupFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducer: ReducersList = {
    signupForm: signupReducer,
};

const SignupForm = memo(
    ({ className, onSuccess }: SignupFormProps) => {
        const dispatch = useAppDispatch();
        const fullName = useSelector(getSignupFullName);
        const password = useSelector(getSignupPassword);
        const email = useSelector(getSignupEmail);
        const isLoading = useSelector(getSignupIsLoading);

        const onChangeLogin = useCallback(
            (value: string) => {
                dispatch(signupActions.setLogin(value));
            },
            [dispatch],
        );

        const onChangePassword = useCallback(
            (value: string) => {
                dispatch(signupActions.setPassword(value));
            },
            [dispatch],
        );

        const onChangeEmail = useCallback(
            (value: string) => {
                dispatch(signupActions.setEmail(value));
            },
            [dispatch],
        );

        const onSignupClick = useCallback(async () => {
            const result = await dispatch(
                signupUser({ full_name: fullName, password, email }),
            );
            if (result.meta.requestStatus === 'fulfilled') {
                onSuccess();
            }
        }, [onSuccess, dispatch, password, fullName, password, email]);

        const disabled = React.useMemo(
            () =>
                isLoading || (!email && !password ? true : !email || !password),
            [email, password],
        );

        return (
            <DynamicModuleLoader removeAfterUnmount reducers={initialReducer}>
                <VStack gap="32">
                    <Wrapper max="210">
                        <Image src="/images/common/logo.png" />
                    </Wrapper>

                    <VStack gap="32" align="center" className={cls.signUpForm}>
                        <Typography variant="h4">Регистрация</Typography>
                        <VStack gap="16" align="center">
                            <Input
                                placeholder="Ваше имя"
                                onChange={onChangeLogin}
                            />
                            <Input
                                placeholder="Email"
                                onChange={onChangeEmail}
                            />
                            <Input
                                placeholder="Пароль"
                                type="password"
                                onChange={onChangePassword}
                            />
                        </VStack>
                        <VStack max align="center">
                            <Button
                                fullWidth
                                outlined
                                variant="secondary"
                                onClick={onSignupClick}
                                loading={isLoading}
                                disabled={disabled}
                            >
                                <Typography bold variant="h6">
                                    Создать аккаунт
                                </Typography>
                            </Button>
                        </VStack>
                    </VStack>
                </VStack>
            </DynamicModuleLoader>
        );
    },
);

export default SignupForm;
