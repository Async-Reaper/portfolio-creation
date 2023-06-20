import React from 'react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';

import cls from './styles.module.scss';

interface Props {
    size?: DesignSystemUiSize;
    rounded?: boolean;
    src: string;
    name?: string;
}

const Component = (props: Props) => {
    const { size = 'l', src = '', rounded = false, name = 'Avatar' } = props;

    const additional = [cls[`size--${size}`]];

    const mods: Mods = {
        [cls.rounded]: rounded,
    };

    return (
        <div className={classNames(cls.avatar, {}, additional)}>
            <img
                className={classNames(cls.avatarImage, mods)}
                src={src}
                alt={name}
            />
        </div>
    );
};

export const Avatar = React.memo(Component);
