import React, { type ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './styles.module.scss';

export type Variants = 'primary' | 'secondary';

type Props = {
    active?: boolean;
    variant?: Variants;
    children?: ReactNode;
} & LinkProps;

const Component = (props: Props) => {
    const {
        to,
        children,
        active = false,
        variant = 'primary',
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.link, {
                [variant]: true,
                [cls.active]: active,
            })}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export const AppLink = React.memo(Component);
