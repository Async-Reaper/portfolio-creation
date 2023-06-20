import {type RouteProps} from 'react-router-dom';
import {MainPage} from 'pages/MainPage';
import {ProfilePage} from 'pages/ProfilePage';
import {NotFoundPage} from 'pages/NotFoundPage';
import {AllPortfolioPage} from "pages/AllPortfolioPage";
import {PortfolioPage} from "pages/PortfolioPage";
import {TheirPortfolioPage} from "pages/TheirPortfolioPage";
import {UserPage} from "pages/UserPage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    redirect?: string;
};
export enum AppRoutes {
    MAIN = 'main',
    PROFILE = 'profile',
    ALL_PORTFOLIO = 'all_portfolio',
    THEIR_PORTFOLIO = 'their_portfolio',
    PORTFOLIO = 'portfolio',
    USER = 'user',
    // Last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ALL_PORTFOLIO]: '/all_portfolio',
    [AppRoutes.PORTFOLIO]: '/portfolio/:id',
    [AppRoutes.THEIR_PORTFOLIO]: '/their_portfolio',
    [AppRoutes.USER]: '/users/:id',
    // Последний
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
        authOnly: false,
        redirect: RoutePath.main,
    },

    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: false,
        redirect: RoutePath.main,
    },

    [AppRoutes.PORTFOLIO]: {
        path: RoutePath.portfolio,
        element: <PortfolioPage />,
        authOnly: false,
    },

    [AppRoutes.THEIR_PORTFOLIO]: {
        path: RoutePath.their_portfolio,
        element: <TheirPortfolioPage />,
        authOnly: false,
        redirect: RoutePath.main,
    },

    [AppRoutes.ALL_PORTFOLIO]: {
        path: RoutePath.all_portfolio,
        element: <AllPortfolioPage />,
        authOnly: false,
    },

    [AppRoutes.USER]: {
        path: RoutePath.user,
        element: <UserPage />,
    },

    // Last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
