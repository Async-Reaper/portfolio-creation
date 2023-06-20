import React, {memo, useCallback} from 'react';
import {useSelector} from "react-redux";
import {getSocialLinksData, type SocialLinks} from "entities/SocialLink";
import {deleteLink, getDeleteLinkLoading} from "features/SocialLink/DeleteSocialLink";
import {DynamicModuleLoader, type ReducersList} from "shared/lib/components";
import {useAppDispatch} from "shared/lib/hooks";
import {Button, HStack, Image, Typography, VStack, Wrapper} from "shared/ui";

import {deleteLinkActions, deleteLinkReducer} from "../../model/slice/deleteLinkSlice";

export interface DeleteLinkFormProps {
    linkId: number;
    className?: string;
    onSuccess: () => void;
}

const initialReducer: ReducersList = {
    deleteSocialLinkForm: deleteLinkReducer,
};

const DeleteLinkForm = memo(({ className, onSuccess, linkId }: DeleteLinkFormProps) => {

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getDeleteLinkLoading);
    const socialLinks = useSelector(getSocialLinksData);


    const onDeleteClick = useCallback(async () => {
        const result = await dispatch(deleteLink(linkId));

        if (socialLinks) {
            const linkArr: SocialLinks[] = socialLinks?.filter(link => link.id === linkId);
            dispatch(deleteLinkActions.deleteLink(linkArr[0]))
        }

        if (result.meta.requestStatus === "fulfilled") {
            onSuccess()
        }
    }, [dispatch, onSuccess]);

    const onCloseModal = useCallback( () => {
        onSuccess();
    }, [onSuccess])

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducer}>
            <VStack gap="32">
                <Wrapper max="210">
                    <Image src="/images/common/logo.png" />
                </Wrapper>

                <VStack gap="32" align="center">
                    <Typography variant="h4">Вы действительно хотите удалить ссылку</Typography>

                    <HStack max align="center" justify="between">
                        <Button
                            outlined
                            variant="primary"
                            onClick={onDeleteClick}
                            loading={isLoading}
                            disabled={isLoading}
                        >
                            <Typography bold variant="h6">
                                Да
                            </Typography>
                        </Button>
                        <Button
                            outlined
                            variant="primary"
                            onClick={onCloseModal}
                            disabled={isLoading}
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

export default DeleteLinkForm;
