import cls from './spacing.module.scss';

import { type Spacing } from '../types';

export const spacingXClasses: Record<Spacing, string> = {
    4: cls.spacingX4,
    8: cls.spacingX8,
    16: cls.spacingX16,
    32: cls.spacingX32,
    64: cls.spacingX64,
    128: cls.spacingX128,
};

export const spacingYClasses: Record<Spacing, string> = {
    4: cls.spacingY4,
    8: cls.spacingY8,
    16: cls.spacingY16,
    32: cls.spacingY32,
    64: cls.spacingY64,
    128: cls.spacingY128,
};

export const spacingClasses: Record<Spacing, string> = {
    4: cls.spacing4,
    8: cls.spacing8,
    16: cls.spacing16,
    32: cls.spacing32,
    64: cls.spacing64,
    128: cls.spacing128,
};
