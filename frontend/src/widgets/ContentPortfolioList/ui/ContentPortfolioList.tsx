import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {getContentPortfolioData, initContentPortfolio} from "entities/ContentPortfolio";
import {getUserAuthData} from "entities/User";
import {ChangeContentPortfolioModal} from "features/ContentPortfolio/ChangeContentPortfolio";
import {CreateContentPortfolioModal} from "features/ContentPortfolio/CreateContentPortfolio";
import {DeleteContentPortfolioModal} from "features/ContentPortfolio/DeleteContentPortfolio";
import {apiUrl} from "shared/lib/const/apiUrl";
import {useAppDispatch, useModal} from "shared/lib/hooks";
import {Button, Div, HStack, Image, Typography, VStack, Wrapper} from "shared/ui";
import {getPortfolioCardData} from "widgets/PortfolioCard";

import cls from './ContentPortfolioList.module.scss';

interface ContentPortfolioListProps {
    portfolioId: string | undefined;
}

const Component = ({portfolioId}: ContentPortfolioListProps) => {
    const {isOpen: isOpenCreateContent, open: openCreateContent, close: closeCreateContent} = useModal();
    const {isOpen: isOpenDeleteContent, open: openDeleteContent, close: closeDeleteContent} = useModal();
    const {isOpen: isOpenChangeContent, open: openChangeContent, close: closeChangeContent} = useModal();

    const portfolioData = useSelector(getPortfolioCardData);
    const contentPortfolio = useSelector(getContentPortfolioData);
    const user = useSelector(getUserAuthData);

    const [deleteId, setDeleteId] = useState<number>(1);
    const [changeId, setChangeId] = useState<number>(1);

    const onDeleteId = useCallback((value: number) => {
        openDeleteContent();
        setDeleteId(value);
    }, [setDeleteId])

    const onChangeId = useCallback((value: number) => {
        openChangeContent();
        setChangeId(value);
    }, [setChangeId])

    const dispatch = useAppDispatch();

    const getContentPortfolio = useCallback(() => {
        dispatch(initContentPortfolio(portfolioId))
    }, [contentPortfolio])

    useEffect(() => {
        getContentPortfolio();
    }, [])

    return (
        <VStack gap="32">
            {
                user?.id === portfolioData?.userId &&
                <Button
                    size='xs'
                    onClick={openCreateContent}
                >
                    <Typography variant="h5">
                        Добавить контент
                    </Typography>
                </Button>
            }

            <Div className={cls.content_portfolio__list}>
                {
                    contentPortfolio?.map(content =>
                       <VStack key={content.id} className={cls.content_portfolio__item} gap="16">
                           <Wrapper max="320">
                               <Image src={`${apiUrl}/${content.img}`} />
                           </Wrapper>
                           <Typography>{content.description}</Typography>
                           {
                               user?.id === portfolioData?.userId &&
                               <HStack max justify="between" gap="32">
                                   <Button
                                       size="xs"
                                       fullWidth
                                       onClick={() => { onChangeId(content.id); }}
                                   >
                                       <Typography variant="h5">
                                           Редактировать
                                       </Typography>
                                   </Button>
                                   <Button
                                       size="xs"
                                       fullWidth
                                       onClick={() => { onDeleteId(content.id); }}
                                   >
                                       <Typography variant="h5">
                                           Удалить
                                       </Typography>
                                   </Button>
                               </HStack>
                           }
                       </VStack>
                    )
                }
            </Div>
            {
                isOpenCreateContent &&
                <CreateContentPortfolioModal
                    portfolioId={portfolioId}
                    isOpen={isOpenCreateContent}
                    onClose={closeCreateContent}
                />
            }
            {
                isOpenDeleteContent &&
                <DeleteContentPortfolioModal
                    contentId={deleteId}
                    isOpen={isOpenDeleteContent}
                    onClose={closeDeleteContent}
                />
            }
            {
                isOpenChangeContent &&
                <ChangeContentPortfolioModal
                    contentId={changeId}
                    isOpen={isOpenChangeContent}
                    onClose={closeChangeContent}
                />
            }
        </VStack>
    );
};

export const ContentPortfolioList = React.memo(Component);
