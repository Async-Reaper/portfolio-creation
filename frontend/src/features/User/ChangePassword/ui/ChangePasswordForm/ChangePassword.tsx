import React, {memo, useCallback, useState} from 'react';
import {useSelector} from "react-redux";
import {DynamicModuleLoader, type ReducersList} from "shared/lib/components";
import {useAppDispatch} from "shared/lib/hooks";
import {Button, Image, Input, Typography, VStack, Wrapper} from "shared/ui";

import {getChangePasswordError} from "../../model/selectors/getChangePasswordError/getChangePasswordError";
import {getChangePasswordLoading} from '../../model/selectors/getChangePasswordLoading/getChangePasswordLoading';
import { changePassword } from '../../model/services/changePassword/changePassword';
import {changePasswordReducer} from "../../model/slice/changePasswordSlice";


export interface ChangePasswordFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducer: ReducersList = {
    changePasswordForm: changePasswordReducer,
};

const ChangePassword = memo(({ className, onSuccess }: ChangePasswordFormProps) => {
    const dispatch = useAppDispatch();

    const [oldPassword, setOldPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');


    const isLoading = useSelector(getChangePasswordLoading);
    const error = useSelector(getChangePasswordError);

    const onChangeOldPassword = useCallback((value: string) => {
        setOldPassword(value)
    }, [oldPassword])

    const onChangeNewPassword = useCallback((value: string) => {
        setNewPassword(value)
    }, [newPassword])

    const onChangeRepeatPassword = useCallback((value: string) => {
        setRepeatPassword(value)
    }, [repeatPassword])

    const onChangePasswordClick = useCallback(async () => {
        const result = await dispatch(changePassword({ oldPassword, newPassword }));

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, oldPassword, newPassword]);

    const disabled = React.useMemo(
        () =>
            isLoading ||
            (
                !oldPassword && !newPassword && !repeatPassword && repeatPassword !== newPassword
                    ? true
                    : !oldPassword || !newPassword || !repeatPassword || newPassword !== repeatPassword
            ),
        [oldPassword, newPassword, repeatPassword],
    );

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducer}>
            <VStack gap="32">
                <Wrapper max="210">
                    <Image src="/images/common/logo.png" />
                </Wrapper>

                <VStack gap="32" align="center" max>
                    <Typography variant="h4">Смена email</Typography>
                    <VStack gap="16" align="center" max>
                        <Input
                            placeholder="Старый пароль"
                            type="password"
                            onChange={onChangeOldPassword}
                        />
                        <Input
                            placeholder="Новый пароль"
                            type="password"
                            onChange={onChangeNewPassword}
                        />
                        <Input
                            placeholder="Повторите новый пароль"
                            type="password"
                            onChange={onChangeRepeatPassword}
                        />
                    </VStack>
                    <VStack max>
                        <Button
                            fullWidth
                            outlined
                            variant="secondary"
                            onClick={onChangePasswordClick}
                            loading={isLoading}
                            disabled={disabled}
                        >
                            <Typography bold variant="h6">
                                Сменить пароль
                            </Typography>
                        </Button>
                    </VStack>
                </VStack>
            </VStack>
        </DynamicModuleLoader>
    );
});

export default ChangePassword;
