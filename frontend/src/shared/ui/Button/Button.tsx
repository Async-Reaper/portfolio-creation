import React, { memo } from 'react';
import { classNames, type Mods } from 'shared/lib';

import cls from './styles.module.scss';

type ButtonTypes = 'button' | 'submit' | 'reset';
interface CommonProps {
    children: React.ReactNode;
    variant?: DesignSystemUiColors;
    size?: DesignSystemUiSize;
    rounded?: boolean;
    type?: ButtonTypes;
    outlined?: boolean;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    onClick?: () => any;
    active?: boolean;
}
type Props = Record<string, unknown> & CommonProps;

export const Button = memo((props: Props) => {
    const {
        children,
        variant = 'primary',
        size = 'l',
        type = 'button',
        outlined = false,
        disabled = false,
        loading = false,
        fullWidth = false,
        rounded = false,
        active = false,
        onClick,
    } = props;

    const classes = [cls[`size--${size}`], cls[`variant--${variant}`]];

    const mods: Mods = {
        [cls.rounded]: rounded,
        [cls.fullWidth]: fullWidth,
        [cls.fitContent]: !fullWidth,
        [cls.fullWidth]: fullWidth,
        [cls.isLoading]: loading,
        [cls.outlined]: outlined,
        [cls.active]: active,
    };

    return (
        <button
            className={classNames(cls.button, mods, classes)}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {loading && <div className={cls.button__loading}>LOADING</div>}

            <div className={cls.button__content}>{children}</div>
        </button>
    );
});
