import React from 'react';
import { useLocation } from 'react-router-dom';
import { HStack } from 'shared/ui';
import { MenuItemsList } from 'widgets/Header/model/items';

import { MenuItem } from '../Navigation/NavigationItem';

const Component = () => {
    const location = useLocation();

    const itemsList = React.useMemo(
        () =>
            MenuItemsList.map((item) => (
                <MenuItem
                    active={location.pathname === item.path}
                    item={item}
                    key={item.path}
                />
            )),
        [location.pathname],
    );

    return <HStack gap="44">{itemsList}</HStack>;
};

export const Navigation = React.memo(Component);
