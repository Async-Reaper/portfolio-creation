import React from 'react';
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {ChangeEmailModal} from "features/User/ChangeEmail";
import {ChangePasswordModal} from "features/User/ChangePassword";
import {useAppDispatch, useModal} from "shared/lib/hooks";
import {Avatar, Button, HStack, Typography, VStack} from "shared/ui";
import {UploadAvatarModal} from "features/User/UploadAvatar";
import {apiUrl} from "shared/lib/const/apiUrl";

const defaultAvatar = '/images/mock/avatar.png'

const Component = () => {
    const {isOpen: isOpenEmail, open: openEmail, close: closeEmail} = useModal();
    const {isOpen: isOpenPassword, open: openPassword, close: closePassword} = useModal();
    const {isOpen: isOpenChangeAvatar, open: openChangeAvatar, close: closeChangeAvatar} = useModal();

    const dispatch = useAppDispatch();
    const user = useSelector(getUserAuthData);

    return (
        <VStack gap="16">
            <VStack gap="8">
                <HStack gap="8">
                    <Avatar src={user?.avatar ? `${apiUrl}/${user.avatar}` : defaultAvatar} />
                    <Typography variant="h4" bold>
                        {user?.full_name}
                    </Typography>
                </HStack>
                <Button
                    size="xs"
                    outlined
                    variant="primary"
                    onClick={openChangeAvatar}
                >
                    <Typography variant="h6">
                        Сменить аватарку
                    </Typography>
                </Button>
            </VStack>
            <VStack gap="16">
                <HStack gap="8">
                    <Typography variant="h5" bold color="green">
                        E-mail:
                    </Typography>
                    <Typography variant="h5">
                        {user?.email}
                    </Typography>
                </HStack>
                <HStack gap="8">
                    <Button
                        size="xs"
                        outlined
                        variant="primary"
                        onClick={openEmail}
                    >
                        <Typography variant="h6">
                            Сменить email
                        </Typography>
                    </Button>
                    <Button
                        size="xs"
                        outlined
                        variant="primary"
                        onClick={openPassword}
                    >
                        <Typography variant="h6">
                            Сменить пароль
                        </Typography>
                    </Button>
                </HStack>
            </VStack>
            <HStack gap="8">
                <Typography variant="h5" bold color="green">
                    Дата регистрации:
                </Typography>
                <Typography variant="h5">
                    {user?.createdAt}
                </Typography>
            </HStack>
            {
                isOpenEmail && <ChangeEmailModal isOpen={isOpenEmail} onClose={closeEmail} />
            }
            {
                isOpenPassword && <ChangePasswordModal isOpen={isOpenPassword} onClose={closePassword} />
            }
            {
                isOpenChangeAvatar && <UploadAvatarModal isOpen={isOpenChangeAvatar} onClose={closeChangeAvatar} />
            }
        </VStack>
    );
};

export const UserCard = React.memo(Component);
