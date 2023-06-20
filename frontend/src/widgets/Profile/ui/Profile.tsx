import React, {useCallback, useEffect} from 'react';
import {useSelector} from "react-redux";
import {apiUrl} from "shared/lib/const/apiUrl";
import {useAppDispatch} from "shared/lib/hooks";
import {Avatar, HStack, Typography, VStack} from "shared/ui";

import {getProfileData} from "../model/selectors/getProfileData/getProfileData";
import {getProfile} from "../model/services/getProfile";

interface ProfileProps {
    userId: string;
}


const defaultAvatar = '/images/mock/avatar.png';

const Component = ({userId}: ProfileProps) => {

    const user = useSelector(getProfileData);
    const dispatch = useAppDispatch();

    const getUser = useCallback(() => {
        dispatch(getProfile(userId));
    }, [])

    useEffect(() => {
        getUser()
    }, [])

    return (
        <VStack gap="16">
            <HStack gap="8">
                <Avatar src={user?.avatar ? `${apiUrl}/${user.avatar}` : defaultAvatar}/>
                <Typography variant="h4" bold>
                    {user?.full_name}
                </Typography>
            </HStack>
            <VStack gap="16">
                <HStack gap="8">
                    <Typography variant="h5" bold color="green">
                        E-mail:
                    </Typography>
                    <Typography variant="h5">
                        {user?.email}
                    </Typography>
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
        </VStack>
    );
};

export const Profile = React.memo(Component);
