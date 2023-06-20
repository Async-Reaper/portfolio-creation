import React, {type ChangeEvent, memo, useCallback, useState} from 'react';
import {useSelector} from "react-redux";
import {createContentPortfolio} from "features/ContentPortfolio/CreateContentPortfolio";
import {signupReducer} from "features/User/SignupUser/model/slices/signupSlice";
import {DynamicModuleLoader, type ReducersList} from "shared/lib/components";
import {useAppDispatch} from "shared/lib/hooks";
import {Button, Image, Typography, VStack, Wrapper} from "shared/ui";

import {getUploadAvatarLoading} from "../../model/selectors/getUploadAvatarLoading/getUploadAvatarLoading";
import {uploadAvatar} from "features/User/UploadAvatar";

export interface DeleteContentPortfolioFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducer: ReducersList = {
    signupForm: signupReducer,
};

const UploadAvatarForm = memo(({ className, onSuccess }: DeleteContentPortfolioFormProps) => {

    const isLoading = useSelector(getUploadAvatarLoading);
    const dispatch = useAppDispatch();

    const [img, setImg] = useState<string | Blob>('');

    const onChangeImg = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImg(e.target.files[0] || '');
        }
    }, [setImg])

    const onUploadAvatarClick = useCallback(async () => {
        const dataResource = new FormData();
        dataResource.append('avatar', img);

        const result = await dispatch(uploadAvatar(dataResource));

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, img]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducer}>
            <VStack gap="32">
                <Wrapper max="210">
                    <Image src="/images/common/logo.png" />
                </Wrapper>

                <VStack gap="32" align="center">
                    <Typography variant="h4">Загрузить новую аватарку</Typography>
                    <VStack gap="16" align="center">
                        <input
                            placeholder="Изображение"
                            type="file"
                            accept=".jpg"
                            multiple={false}
                            onChange={onChangeImg}
                        />
                    </VStack>
                    <VStack max align="center">
                        <Button
                            fullWidth
                            outlined
                            variant="secondary"
                            onClick={onUploadAvatarClick}
                            loading={isLoading}
                        >
                            <Typography bold variant="h6">
                                Обновить аватарку
                            </Typography>
                        </Button>
                    </VStack>
                </VStack>
            </VStack>
        </DynamicModuleLoader>
    );
});

export default UploadAvatarForm;
