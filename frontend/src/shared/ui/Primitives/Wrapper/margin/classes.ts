import cls from './margin.module.scss';

export type Spacing = '4' | '8' | '16' | '32' | '64' | '128';

export const topClassesAbsolute: Record<Spacing, string> = {
    4: cls.topAbsolute4,
    8: cls.topAbsolute8,
    16: cls.topAbsolute16,
    32: cls.topAbsolute32,
    64: cls.topAbsolute64,
    128: cls.topAbsolute128,
};

export const topClassesRelative: Record<Spacing, string> = {
    4: cls.topRelative4,
    8: cls.topRelative8,
    16: cls.topRelative16,
    32: cls.topRelative32,
    64: cls.topRelative64,
    128: cls.topRelative128,
};

export const bottomClassesAbsolute: Record<Spacing, string> = {
    4: cls.bottomAbsolute4,
    8: cls.bottomAbsolute8,
    16: cls.bottomAbsolute16,
    32: cls.bottomAbsolute32,
    64: cls.bottomAbsolute64,
    128: cls.bottomAbsolute128,
};
export const bottomClassesRelative: Record<Spacing, string> = {
    4: cls.bottomRelative4,
    8: cls.bottomRelative8,
    16: cls.bottomRelative16,
    32: cls.bottomRelative32,
    64: cls.bottomRelative64,
    128: cls.bottomRelative128,
};

export const leftClassesAbsolute: Record<Spacing, string> = {
    4: cls.leftAbsolute4,
    8: cls.leftAbsolute8,
    16: cls.leftAbsolute16,
    32: cls.leftAbsolute32,
    64: cls.leftAbsolute64,
    128: cls.leftAbsolute128,
};
export const leftClassesRelative: Record<Spacing, string> = {
    4: cls.leftRelative4,
    8: cls.leftRelative8,
    16: cls.leftRelative16,
    32: cls.leftRelative32,
    64: cls.leftRelative64,
    128: cls.leftRelative128,
};

export const rightClassesAbsolute: Record<Spacing, string> = {
    4: cls.rightAbsolute4,
    8: cls.rightAbsolute8,
    16: cls.rightAbsolute16,
    32: cls.rightAbsolute32,
    64: cls.rightAbsolute64,
    128: cls.rightAbsolute128,
};
export const rightClassesRelative: Record<Spacing, string> = {
    4: cls.rightRelative4,
    8: cls.rightRelative8,
    16: cls.rightRelative16,
    32: cls.rightRelative32,
    64: cls.rightRelative64,
    128: cls.rightRelative128,
};
