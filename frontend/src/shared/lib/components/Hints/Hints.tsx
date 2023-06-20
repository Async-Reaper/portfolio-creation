import React from 'react';
import { ColoredIcon, Icon } from 'shared/lib/components';
import { HStack, Typography } from 'shared/ui';

import cls from './styles.module.scss';

const Component = () => (
    <HStack className={cls.Hints} gap="4">
        <HStack gap="4" align="center">
            <ColoredIcon name="fire" />
            <Typography variant="caption">Большой спрос</Typography>
        </HStack>

        <HStack gap="4" align="center">
            <Icon name="lock" color="red" />
            <Typography variant="caption">Закрыт для продажи</Typography>
        </HStack>

        <HStack gap="4" align="center">
            <Icon name="point" color="green" />
            <Typography variant="caption">Сейчас слушают</Typography>
        </HStack>

        <HStack gap="4">
            <Icon name="unlock" color="green" />
            <Typography variant="caption">Открыт для продажи</Typography>
        </HStack>
    </HStack>
);

export const Hints = React.memo(Component);
