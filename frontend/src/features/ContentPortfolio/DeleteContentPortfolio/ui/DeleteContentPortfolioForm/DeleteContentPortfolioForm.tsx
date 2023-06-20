import React, {memo, useCallback} from 'react';
import {useSelector} from "react-redux";
import {type SocialLinks} from "entities/SocialLink";
import {deleteLink, deleteLinkActions} from "features/SocialLink/DeleteSocialLink";
import {DynamicModuleLoader, type ReducersList} from "shared/lib/components";
import {Button, HStack, Image, Typography, VStack, Wrapper} from "shared/ui";

import {getDeleteContentPortfolioLoading} from "../../model/selectors/getDeleteContentPortfolioLoading/getDeleteContentPortfolioLoading";
import {deleteContentPortfolioReducer} from "../../model/slice/deleteContentPortfolioSlice";
import {useAppDispatch} from "shared/lib/hooks";
import {deleteContentPortfolio} from "features/ContentPortfolio/DeleteContentPortfolio";

export interface DeleteContentPortfolioFormProps {
    contentId: number;
    className?: string;
    onSuccess: () => void;
}

const initialReducer: ReducersList = {
    deleteContentPortfolioForm: deleteContentPortfolioReducer,
};

const DeleteContentPortfolioForm = memo(({ className, onSuccess, contentId }: DeleteContentPortfolioFormProps) => {

    const isLoading = useSelector(getDeleteContentPortfolioLoading);
    const dispatch = useAppDispatch();

    const onDeleteClick = useCallback(async () => {
        const result = await dispatch(deleteContentPortfolio(contentId));

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
                    <Typography variant="h4">Вы действительно хотите удалить элемент портфолио</Typography>

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

export default DeleteContentPortfolioForm;
