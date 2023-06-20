import React from 'react';
import { AppLink, Typography } from 'shared/ui';

import { type MenuItemType } from '../../../model/items';

interface Props {
    active?: boolean;
    item: MenuItemType;
}

const Component = ({ item, active }: Props) => (
    <AppLink to={item.path} active={active}>
        <Typography variant="h6" bold>
            {item.text}
        </Typography>
    </AppLink>
);

export const MenuItem = React.memo(Component);
