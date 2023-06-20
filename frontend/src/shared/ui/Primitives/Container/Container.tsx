import React, { type ReactNode } from 'react';
import { classNames } from 'shared/lib';

import cls from './styles.module.scss';

interface ContainerProps {
    className?: string;
    children: ReactNode;
}
export const Container = ({ children, className }: ContainerProps) => (
    <section className={classNames(cls.container, {}, [className])}>
        {children}
    </section>
);
