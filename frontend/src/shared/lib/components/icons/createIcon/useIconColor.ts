export const useIconColor = (color?: DesignSystemColors) => {
    if (!color) {
        return 'var(--color-neutral)';
    }

    return `var(--color-${color})`;
};
