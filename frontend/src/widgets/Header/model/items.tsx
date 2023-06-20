import { RoutePath } from 'app/providers/Router/config/routeConfig';

export interface MenuItemType {
    path: string;
    text: string;
    // Icon: ReactNode;
}

export const MenuItemsList: MenuItemType[] = [
    {
        path: RoutePath.their_portfolio,
        // Icon: <Icon name="shopping_cart" color="neutral" size={48} />,
        text: 'Мои портфолио',
    },
    {
        path: RoutePath.all_portfolio,
        // Icon: <Icon name="shopping_cart" color="neutral" />,
        text: 'Все портфолио',
    },
];
