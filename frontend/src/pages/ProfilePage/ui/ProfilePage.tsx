import {Container, HStack, VStack, Wrapper} from 'shared/ui';
import {SocialLinks} from "widgets/SocialLinks";
import {UserCard} from "widgets/UserCard/ui/UserCard";

import cls from './styles.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({className}: ProfilePageProps) => {
    const userId = localStorage.getItem('userId') || '';

    return (
        <Container className={cls.profilePageContainer}>
            <Wrapper spacingY="32">
                <HStack justify="between" align="start">
                    <VStack gap="16">
                        <UserCard/>
                        <SocialLinks userId={userId} isUpdate={true}/>
                    </VStack>
                </HStack>
            </Wrapper>
        </Container>
    );
};

export default ProfilePage;
