import React, { type ReactNode } from 'react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import {
    heightClasses,
    widthClasses,
} from 'shared/ui/Primitives/Wrapper/sizes/classes';

import cls from './styles.module.scss';

import {
    bottomClassesAbsolute,
    bottomClassesRelative,
    leftClassesAbsolute,
    leftClassesRelative,
    rightClassesAbsolute,
    rightClassesRelative,
    topClassesAbsolute,
    topClassesRelative,
} from './margin/classes';
import { type Position, positionClasses } from './position/classes';
import {
    spacingClasses,
    spacingXClasses,
    spacingYClasses,
} from './spacing/classes';
import { type Size, type Spacing } from './types';

interface WrapperProps {
    className?: string;
    children: ReactNode;
    position?: Position;
    spacingX?: Spacing;
    spacingY?: Spacing;
    spacing?: Spacing;
    top?: Spacing;
    left?: Spacing;
    right?: Spacing;
    bottom?: Spacing;
    max?: Size;
    maxH?: Size;
    full?: boolean;
}
export const Wrapper = (props: WrapperProps) => {
    const {
        className,
        children,
        position = 'relative',
        spacingX,
        spacingY,
        spacing,
        top,
        left,
        right,
        bottom,
        max,
        maxH,
        full,
    } = props;

    const mods: Mods = {
        [cls.full]: full,
    };

    const classes = [
        className,
        positionClasses[position],
        spacing && spacingClasses[spacing],
        spacingX && spacingXClasses[spacingX],
        spacingY && spacingYClasses[spacingY],
        max && widthClasses[max],
        maxH && heightClasses[maxH],
    ];

    if (top && position === 'absolute') {
        classes.push(topClassesAbsolute[top]);
    }

    if (top && position === 'relative') {
        classes.push(topClassesRelative[top]);
    }

    if (bottom && position === 'absolute') {
        classes.push(bottomClassesAbsolute[bottom]);
    }

    if (bottom && position === 'relative') {
        classes.push(bottomClassesRelative[bottom]);
    }

    if (left && position === 'absolute') {
        classes.push(leftClassesAbsolute[left]);
    }

    if (left && position === 'relative') {
        classes.push(leftClassesRelative[left]);
    }

    if (right && position === 'absolute') {
        classes.push(rightClassesAbsolute[right]);
    }

    if (right && position === 'relative') {
        classes.push(rightClassesRelative[right]);
    }

    return (
        <div className={classNames(cls.wrapper, mods, classes)}>{children}</div>
    );
};
