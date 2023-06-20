import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {getSocialLinksData,initSocialLink} from "entities/SocialLink";
import {AddLinkModal} from "features/SocialLink/AddSocialLink";
import {DeleteLinkModal} from "features/SocialLink/DeleteSocialLink";
import {useAppDispatch, useModal} from "shared/lib/hooks";
import {Button, HStack, Typography, VStack} from "shared/ui";

import cls from './SocialLinks.module.scss';

interface SocialLinksProps {
    userId: string;
    isUpdate: boolean;
}

const Component = ({userId, isUpdate}: SocialLinksProps) => {
    const { isOpen: isOpenAddLink, open: openAddLink, close: closeAddLink } = useModal();
    const { isOpen: isOpenDeleteLink, open: openDeleteLink, close: closeDeleteLink } = useModal();

    const [linkId, setLinkId] = useState<number>(1);

    const socialLinks = useSelector(getSocialLinksData);
    const dispatch = useAppDispatch();

    const onLinkId = useCallback((value: number) => {
        openDeleteLink();
        setLinkId(value);
    }, [setLinkId])

    const getSocialLink = useCallback(() => {
        dispatch(initSocialLink(userId))
    }, [socialLinks])

    useEffect(() => {
       getSocialLink()
    }, [])

    return (
        <VStack gap="16">
            <Typography variant="h5" bold color="green">
                Ссылки на социальные сети
            </Typography>
            <VStack gap="4">
                {
                    socialLinks?.map(socialLink =>
                        <HStack key={socialLink.id} gap="32">
                            <a className={cls.link} href={socialLink.link} target="_blank">
                                <Typography variant="h5">
                                    {socialLink.link}
                                </Typography>
                            </a>
                            {
                                isUpdate &&
                                <Button size='xs' onClick={() => onLinkId(socialLink.id)}>
                                    Удалить
                                </Button>
                            }
                        </HStack>
                    )
                }
                {
                    isUpdate &&
                    <Button
                        size='xs'
                        variant="neutral"
                        onClick={openAddLink}
                    >
                        Добавить ссылку
                    </Button>
                }
            </VStack>
            {
                isOpenAddLink && <AddLinkModal isOpen={isOpenAddLink} onClose={closeAddLink} />
            }
            {
                isOpenDeleteLink &&
                <DeleteLinkModal
                    isOpen={isOpenDeleteLink}
                    onClose={closeDeleteLink}
                    linkId={linkId} />
            }
        </VStack>
    );
};

export const SocialLinks = React.memo(Component);
