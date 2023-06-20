import React, {memo, useCallback, useState} from 'react';
import {useSelector} from "react-redux";
import {DynamicModuleLoader, type ReducersList} from "shared/lib/components";
import {useAppDispatch} from "shared/lib/hooks";
import {Button, Image, Input, Typography, VStack, Wrapper} from "shared/ui";

import {getCreatePortfolioLoading} from "../../model/selectors/getCreatePortfolioLoading/getCreatePortfolioLoading";
import {createPortfolio} from "../../model/services/createPortfolio/createPortfolio";
import {createPortfolioReducer} from "../../model/slice/createPortfolioSlice";

export interface DeleteContentPortfolioFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducer: ReducersList = {
    createPortfolioForm: createPortfolioReducer,
};

const CreatePortfolioForm = memo(({ className, onSuccess }: DeleteContentPortfolioFormProps) => {

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getCreatePortfolioLoading);

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('')
    const userId: number = Number(localStorage.getItem('userId'));

    const onChangeTitle = useCallback((value: string) => {
        setTitle(value);
    }, [setTitle])

    const onChangeDescription = useCallback((value: string) => {
        setDescription(value);
    }, [setDescription])


    const onCreateClick = useCallback(async () => {
       const result = await dispatch(createPortfolio({ title, description, userId }))

        if (result.meta.requestStatus === "fulfilled") {
            onSuccess();
        }

    }, [onSuccess, dispatch, title, description]);

    const disabled = React.useMemo(
        () =>
            isLoading || (!title && !description ? true : !title || !description),
        [title, description],
    );

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducer}>
            <VStack gap="32">
                <Wrapper max="210">
                    <Image src="/images/common/logo.png" />
                </Wrapper>

                <VStack gap="32" align="center">
                    <Typography variant="h4">Создание портфолио</Typography>
                    <VStack gap="16" align="center">
                        <Input
                            placeholder="Название портфолио"
                            onChange={onChangeTitle}
                        />
                        <Input
                            placeholder="Описание портфолио"
                            onChange={onChangeDescription}
                        />
                    </VStack>
                    <VStack max align="center">
                        <Button
                            fullWidth
                            outlined
                            variant="secondary"
                            onClick={onCreateClick}
                            loading={isLoading}
                            disabled={disabled}
                        >
                            <Typography bold variant="h6">
                                Создать портфолио
                            </Typography>
                        </Button>
                    </VStack>
                </VStack>
            </VStack>
        </DynamicModuleLoader>
    );
});

export default CreatePortfolioForm;
