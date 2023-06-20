import React, {memo, useCallback} from 'react';
import {useSelector} from "react-redux";
import {changeEmail} from "features/User/ChangeEmail";
import {DynamicModuleLoader, type ReducersList} from "shared/lib/components";
import {useAppDispatch} from "shared/lib/hooks";
import {Button, Image, Input, Typography, VStack, Wrapper} from "shared/ui";

import {getEmailData} from "../../model/selectors/getEmailData/getEmailData";
import {getEmailLoading} from "../../model/selectors/getEmailLoading/getEmailLoading";
import {changeEmailActions, changeEmailReducer} from "../../model/slice/changeEmailSlice";

export interface DeleteContentPortfolioFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducer: ReducersList = {
    changeEmailForm: changeEmailReducer
};

const ChangeEmailForm = memo(({ className, onSuccess }: DeleteContentPortfolioFormProps) => {
    const isLoading = useSelector(getEmailLoading);
    const newEmail = useSelector(getEmailData);
    const dispatch = useAppDispatch();

    const onChangeEmail = useCallback((value: string) => {
        dispatch(changeEmailActions.setNewEmail(value));
    }, [dispatch])

    const onChangeEmailClick = useCallback(async () => {
        const result = await dispatch(changeEmail({ newEmail }));

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, newEmail]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducer}>
            <VStack gap="32">
                <Wrapper max="210">
                    <Image src="/images/common/logo.png" />
                </Wrapper>

                <VStack gap="32" align="center">
                    <Typography variant="h4">Смена email</Typography>
                    <VStack gap="16" align="center">
                        <Input
                            placeholder="Новый email"
                            onChange={onChangeEmail}
                        />
                    </VStack>
                    <VStack max align="center">
                        <Button
                            fullWidth
                            outlined
                            variant="secondary"
                            onClick={onChangeEmailClick}
                            loading={isLoading}
                            // disabled={disabled}
                        >
                            <Typography bold variant="h6">
                                Сменить почту
                            </Typography>
                        </Button>
                    </VStack>
                </VStack>
            </VStack>
        </DynamicModuleLoader>
    );
});

export default ChangeEmailForm;
