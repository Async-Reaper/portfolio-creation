import React, {memo, useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import {DynamicModuleLoader, type ReducersList,} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {Image, Input, Typography, VStack, Wrapper} from 'shared/ui';
import {Button} from 'shared/ui/Button/Button';

import cls from './AddLinkForm.module.scss';

import {getAddSocialLinkErrors } from "../../model/selectors/getAddSocialLinkErrors/getAddSocialLinkErrors";
import { getAddSocialLinkLoading } from "../../model/selectors/getAddSocialLinkLoading/getAddSocialLinkLoading";
import {addSocialLink} from "../../model/services/addSocialLink/addSocialLink";
import {addSocialLinkReducer} from "../../model/slice/addSocialLinkSlice";

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    addSocialLinkForm: addSocialLinkReducer,
};

const AddLinkForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const dispatch = useAppDispatch();
    const userId = Number(localStorage.getItem('userId'));
    const [link, setLink] = useState('');
    const isLoading = useSelector(getAddSocialLinkLoading);
    const errors = useSelector(getAddSocialLinkErrors);

    const onChangeAddLink = useCallback(
        (value: string) => {
            setLink(value)
        },
        [dispatch],
    );

    const onAddClick = useCallback(async () => {
        const result = await dispatch(addSocialLink({ link, userId }));

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, link, userId]);

    const disabled = React.useMemo(
        () =>
            isLoading ||
            (!link && !userId ? true : !link || !userId),
        [link, userId],
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
                            type="text"
                            placeholder="Ссылка"
                            onChange={onChangeAddLink}
                        />
                    </VStack>
                    <Wrapper full bottom="32">
                        <Button
                            fullWidth
                            outlined
                            variant="secondary"
                            onClick={onAddClick}
                            loading={isLoading}
                            disabled={disabled}
                        >
                            <Typography variant="h6" bold>
                                Добавить ссылку
                            </Typography>
                        </Button>
                    </Wrapper>
                </VStack>
            </VStack>
        </DynamicModuleLoader>
    );
});

export default AddLinkForm;
