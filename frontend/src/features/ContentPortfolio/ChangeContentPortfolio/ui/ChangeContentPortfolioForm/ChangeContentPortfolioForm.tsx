import React, {type ChangeEvent, memo, useCallback, useState} from 'react';
import {useSelector} from "react-redux";
import {DynamicModuleLoader, type ReducersList} from "shared/lib/components";
import {useAppDispatch} from "shared/lib/hooks";
import {Button, Image, Input, Typography, VStack, Wrapper} from "shared/ui";

import {
    getChangeContentPortfolioLoading
} from "../../model/selectors/getChangeContentPortfolioLoading/getChangePortfolioLoading";
import {changeContentPortfolio} from '../../model/services/changeContentPortfolio/changeContentPortfolio'
import {changeContentPortfolioReducer} from "../../model/slice/changeContentPortfolioSlice";
import {type ChangeContentPortfolio} from "../../model/types/changeContentPortfolio";

export interface ChangeContentPortfolioFormProps {
    contentId: number;
    className?: string;
    onSuccess: () => void;
}

const initialReducer: ReducersList = {
    changeContentPortfolioForm: changeContentPortfolioReducer,
};

const ChangeContentPortfolioForm = memo(({ className, onSuccess, contentId }: ChangeContentPortfolioFormProps) => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getChangeContentPortfolioLoading);

    const [img, setImg] = useState<string | Blob>('');
    const [description, setDescription] = useState<string>('')

    const onChangeImg = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImg(e.target.files[0] || '');
        }
    }, [setImg])

    const dataResource = new FormData();

    const onChangeDescription = useCallback((value: string) => {
        setDescription(value);
    }, [setDescription])

    const onChangeContentClick = useCallback(async () => {
        dataResource.append('img', img);
        dataResource.append('description', description);

        const responseParams: ChangeContentPortfolio = {
            data: dataResource,
            contentId
        }

        const result = await dispatch(changeContentPortfolio(responseParams));

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
                    <Typography variant="h4">Редактирование контента</Typography>
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
                            onClick={onChangeContentClick}
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

export default ChangeContentPortfolioForm;
