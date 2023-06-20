import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'app/providers/Router/config/routeConfig';
import { getUserAuthData } from 'entities/User';

interface Props {
    children: JSX.Element;
}
const Component = ({ children }: Props) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (auth == null) {
        return (
            <Navigate to={RoutePath.main} state={{ from: location }} replace />
        );
    }

    return children;
};

export const RequireAuth = Component;
