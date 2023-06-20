import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
    type AppRoutesProps,
    routeConfig,
} from 'app/providers/Router/config/routeConfig';
import { PageLoader } from 'shared/ui';


const AppRouter = () => {
    const renderWithWrapper = React.useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    // route.authOnly ? (
                    //     <RequireAuth>{element}</RequireAuth>
                    // ) : (
                    //     <NoAuth route={route}>{element}</NoAuth>
                    // )
                    route.element
                }
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default React.memo(AppRouter);
