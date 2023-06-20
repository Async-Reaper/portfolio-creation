import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { type AppRoutesProps } from 'app/providers/Router/config/routeConfig';
import { getUserAuthData } from 'entities/User';

interface Props {
    children: JSX.Element;
    route?: AppRoutesProps;
}
const Component = ({ children, route }: Props) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    console.log(auth);

    if (auth && route?.redirect) {
        return (
            <Navigate to={route?.redirect} state={{ from: location }} replace />
        );
    }

    return children;
};

export const NoAuth = Component;
