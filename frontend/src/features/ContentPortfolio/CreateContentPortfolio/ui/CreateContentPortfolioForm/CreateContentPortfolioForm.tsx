import React, {type ChangeEvent, memo, useCallback, useState} from 'react';
import {useSelector} from "react-redux";
import {createContentPortfolio} from "features/ContentPortfolio/CreateContentPortfolio";
import {DynamicModuleLoader, type ReducersList} from "shared/lib/components";
import {useAppDispatch} from "shared/lib/hooks";
import {Button, Image, Input, Typography, VStack, Wrapper} from "shared/ui";

import {
    getCreateContentPortfolioLoading
} from "../../model/selectors/getCreateContentPortfolioLoading/getCreateContentPortfolioLoading";
import {createContentPortfolioReducer} from "../../model/slice/createContentPortfolioSlice";

export interface CreateContentPortfolioFormProps {
    portfolioId: string | undefined;
    className?: string;
    onSuccess: () => void;
}

const initialReducer: ReducersList = {
    createContentPortfolioForm: createContentPortfolioReducer,
};

const CreateContentPortfolioForm = memo(({ className, onSuccess, portfolioId }: CreateContentPortfolioFormProps) => {

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getCreateContentPortfolioLoading);

    const [img, setImg] = useState<string | Blob>('');
    const [description, setDescription] = useState<string>('')

    const dataResource = new FormData();

    const onChangeImg = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImg(e.target.files[0] || '');
        }
    }, [setImg])

    const onChangeDescription = useCallback((value: string) => {
        setDescription(value);
    }, [setDescription])

    const onCreateContentClick = useCallback(async () => {
        dataResource.append('img', img);
        dataResource.append('description', description);
        dataResource.append('portfolioId', portfolioId || '');

        const result = await dispatch(createContentPortfolio(dataResource));

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, img, description]);

    const disabled = React.useMemo(
        () =>
            isLoading || (!img && !description ? true : !img || !description),
        [img, description],
    );

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducer}>
            <VStack gap="32">
                <Wrapper max="210">
                    <Image src="/images/common/logo.png" />
                </Wrapper>

                <VStack gap="32" align="center">
                    <Typography variant="h4">Добавление контента</Typography>
                    <VStack gap="16" align="center">
                        <input
                            placeholder="Изображение"
                            type="file"
                            accept=".jpg"
                            multiple={false}
                            onChange={onChangeImg}
                        />
                        <Input
                            placeholder="Описание контента"
                            onChange={onChangeDescription}
                        />
                    </VStack>
                    <VStack max align="center">
                        <Button
                            fullWidth
                            outlined
                            variant="secondary"
                            onClick={onCreateContentClick}
                            loading={isLoading}
                            disabled={disabled}
                        >
                            <Typography bold variant="h6">
                                Добавить контент в портфолио
                            </Typography>
                        </Button>
                    </VStack>
                </VStack>
            </VStack>
        </DynamicModuleLoader>
    );
});

export default CreateContentPortfolioForm;
