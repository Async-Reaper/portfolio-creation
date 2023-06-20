import cls from './position.module.scss';

export type Position = 'relative' | 'absolute';

export const positionClasses: Record<Position, string> = {
    relative: cls.relative,
    absolute: cls.absolute,
};
