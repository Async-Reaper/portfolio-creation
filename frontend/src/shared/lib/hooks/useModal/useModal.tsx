import React from 'react';

export const useModal = () => {
    const [isOpen, setOpened] = React.useState(false);

    const open = React.useCallback(() => {
        setOpened(true);
    }, []);
    const close = React.useCallback(() => {
        setOpened(false);
    }, []);

    return { isOpen, open, close };
};
