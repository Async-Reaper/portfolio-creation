import { type ReactNode } from 'react';
import { classNames, type Mods } from 'shared/lib';

import cls from 'shared/ui/Primitives/Stack/Flex/styles.module.scss';

interface PortalProps {
    className?: string;
    children?: ReactNode;
}

export const Div = (props: PortalProps) => {
    const { className, children } = props;

    const mods: Mods = {
        // [cls.max]: max,
    };

    const classes = [
        className,
        // JustifyClasses[justify]
    ];

    return <div className={classNames(cls.Div, mods, classes)}>{children}</div>;
};
