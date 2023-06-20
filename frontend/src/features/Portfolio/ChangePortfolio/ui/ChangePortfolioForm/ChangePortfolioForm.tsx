import React, {memo, useCallback, useState} from 'react';
import {useSelector} from "react-redux";
import {DynamicModuleLoader, type ReducersList} from "shared/lib/components";
import {useAppDispatch} from "shared/lib/hooks";
import {Button, Image, Input, Typography, VStack, Wrapper} from "shared/ui";

import {getChangePortfolioLoading} from '../../model/selectors/getChangePortfolioLoading/getChangePortfolioLoading';
import {changePortfolio} from "../../model/services/changePortfolio/changePortfolio";
import {changePortfolioReducer} from "../../model/slice/changePortfolioSlice";
import {
    type ChangePortfolioBody,
    type ChangePortfolioRequest
} from "../../model/types/changePortfolio";

export interface DeleteContentPortfolioFormProps {
    portfolioId: number;
    className?: string;
    onSuccess: () => void;
}

const initialReducer: ReducersList = {
    changePortfolioForm: changePortfolioReducer,
};

const ChangePortfolioForm = memo(({className, onSuccess, portfolioId}: DeleteContentPortfolioFormProps) => {
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getChangePortfolioLoading);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('')

    const onChangeTitle = useCallback((value: string) => {
        setTitle(value);
    }, [setTitle])

    const onChangeDescription = useCallback((value: string) => {
        setDescription(value);
    }, [setDescription])

    const onChangePortfolioClick = useCallback(async () => {
        const data: ChangePortfolioBody = {
            title,
            description
        }

        const dataRequest: ChangePortfolioRequest = {
            data,
            portfolioId
        }

        const result = await dispatch(changePortfolio(dataRequest));

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, title, description]);

    const disabled = React.useMemo(
        () =>
            isLoading || (!title && !description ? true : !title || !description),
        [title, description],
    );

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducer}>
            <VStack gap="32">
                <Wrapper max="210">
                    <Image src="/images/common/logo.png"/>
                </Wrapper>

                <VStack gap="32" align="center">
                    <Typography variant="h4">Редактирование портфолио</Typography>
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
                            onClick={onChangePortfolioClick}
                            loading={isLoading}
                            disabled={disabled}
                        >
                            <Typography bold variant="h6">
                                Изменить портфолио
                            </Typography>
                        </Button>
                    </VStack>
                </VStack>
            </VStack>
        </DynamicModuleLoader>
    );
});

export default ChangePortfolioForm;
