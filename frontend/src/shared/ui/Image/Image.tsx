import React, { type ImgHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './styles.module.scss';

type Props = {
    objectFit?: 'cover' | 'contain';
} & ImgHTMLAttributes<any>;

const Component = (props: Props) => {
    const { src, alt, objectFit = 'contain', ...otherProps } = props;

    const additional = [cls[`objectFit--${objectFit}`]];

    return (
        <img
            src={src}
            alt={alt}
            className={classNames(cls.image, {}, additional)}
            {...otherProps}
        />
    );
};

export const Image = React.memo(Component);
