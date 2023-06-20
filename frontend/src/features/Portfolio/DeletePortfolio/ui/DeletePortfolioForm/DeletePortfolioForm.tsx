import React, {memo, useCallback} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {DynamicModuleLoader, type ReducersList} from "shared/lib/components";
import {useAppDispatch} from "shared/lib/hooks";
import {Button, HStack, Image, Typography, VStack, Wrapper} from "shared/ui";

import {getDeletePortfolioLoading} from "../../model/selectors/getDeletePortfolioLoading/getDeletePortfolioLoading";
import {deletePortfolio} from "../../model/services/deletePortfolio/deletePortfolio";
import {deletePortfolioReducer} from "../../model/slice/deletePortfolioSlice";

export interface DeleteLinkFormProps {
    portfolioId: number;
    className?: string;
    onSuccess: () => void;
}

const initialReducer: ReducersList = {
    deletePortfolioForm: deletePortfolioReducer,
};

const DeletePortfolioForm = memo(({ className, onSuccess, portfolioId }: DeleteLinkFormProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const isLoading = useSelector(getDeletePortfolioLoading);

    const onDeleteClick = useCallback(async () => {
        const result = await dispatch(deletePortfolio(portfolioId));

        if (result.meta.requestStatus === "fulfilled") {
            onSuccess()
        }
    }, []);

    const onCloseModal = useCallback( () => {
        onSuccess();
    }, [])

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducer}>
            <VStack gap="32">
                <Wrapper max="210">
                    <Image src="/images/common/logo.png" />
                </Wrapper>

                <VStack gap="32" align="center">
                    <Typography variant="h4">Вы действительно хотите портфолио?</Typography>

                    <HStack max align="center" justify="between">
                        <Button
                            outlined
                            variant="primary"
                            onClick={onDeleteClick}
                            loading={isLoading}

                        >
                            <Typography bold variant="h6">
                                Да
                            </Typography>
                        </Button>
                        <Button
                            outlined
                            variant="neutral"
                            onClick={onCloseModal}
                        >
                            <Typography bold variant="h6">
                                Нет
                            </Typography>
                        </Button>
                    </HStack>
                </VStack>
            </VStack>
        </DynamicModuleLoader>
    );
});

export default DeletePortfolioForm;
