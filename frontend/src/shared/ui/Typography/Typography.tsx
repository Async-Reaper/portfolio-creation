import React from 'react';
import { classNames, type Mods } from 'shared/lib';

import cls from './styles.module.scss';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'caption';

const mapTag = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    h7: 'p',
    caption: 'p',
};

interface TypographyProps {
    color?: DesignSystemTextColors;
    children?: React.ReactNode;
    bold?: boolean;
    variant?: Variant;
    inline?: boolean;
    noWrap?: boolean;
    uppercase?: boolean;
}
const Component = (props: TypographyProps) => {
    const {
        variant = 'h5',
        color = 'inherit',
        children,
        noWrap = false,
        inline = false,
        uppercase = false,
        bold = false,
        ...otherProps
    } = props;

    const ComponentUi = mapTag[variant];

    const mods: Mods = {
        [cls.uppercase]: uppercase,
        [cls.noWrap]: noWrap,
        [cls.inline]: inline,
        [cls.bold]: bold,
    };

    const classes = [cls[`variant--${variant}`], cls[`color--${color}`]];

    return (
        // @ts-expect-error
        <ComponentUi
            className={classNames(cls.text, mods, classes)}
            {...otherProps}
        >
            {children}
        </ComponentUi>
    );
};

export const Typography = React.memo(Component);
