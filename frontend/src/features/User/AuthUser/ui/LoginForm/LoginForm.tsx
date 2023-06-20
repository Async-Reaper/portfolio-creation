import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useErrors } from 'shared/lib/hooks';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Image, Input, Typography, VStack, Wrapper } from 'shared/ui';
import { Button } from 'shared/ui/Button/Button';

import cls from './LoginForm.module.scss';

import { type ValidateAuthFormError } from '../../model/consts/validateAuthFormErrorConsts';
import { getLoginEmail } from '../../model/selectors/getLoginEmail/getLoginEmail';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginValidateErrors } from '../../model/selectors/getLoginValidateErrors/getLoginValidateErrors';
import { loginUser } from '../../model/services/loginUser/loginUser';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const dispatch = useAppDispatch();
    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const errors = useSelector(getLoginValidateErrors);

    useErrors<ValidateAuthFormError>({ title: 'Ошибка авторизации', errors });

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setEmail(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginUser({ email, password }));

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, password, email]);

    const disabled = React.useMemo(
        () =>
            isLoading ||
            (!email && !password ? true : !email || !password),
        [email, password],
    );

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <VStack gap="32">
                <Wrapper max="210">
                    <Image src="/images/common/logo.png" />
                </Wrapper>

                <VStack gap="32" align="center" className={cls.loginForm}>
                    <Typography variant="h4">Авторизация</Typography>
                    <VStack gap="16" align="center">
                        <Input
                            type="email"
                            placeholder="Почта"
                            onChange={onChangeUsername}
                        />
                        <Input
                            type="password"
                            placeholder="Пароль"
                            onChange={onChangePassword}
                        />
                    </VStack>
                    <Wrapper className={cls.loginForm__errorsField}>
                        {errors != null &&
                            errors.length > 0 &&
                            errors?.map((error, index) => (
                                <Typography
                                    variant="h7"
                                    key={`loginError-${index}`}
                                    color="danger-text"
                                >
                                    {error}
                                </Typography>
                            ))}
                    </Wrapper>
                    <Wrapper full bottom="32">
                        <Button
                            fullWidth
                            outlined
                            variant="secondary"
                            onClick={onLoginClick}
                            loading={isLoading}
                            disabled={disabled}
                        >
                            <Typography variant="h6" bold>
                                Войти в аккаунт
                            </Typography>
                        </Button>
                    </Wrapper>
                </VStack>
            </VStack>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
