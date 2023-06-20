import React, { Suspense } from 'react';
import { Loader } from 'shared/ui';
import { Modal } from 'shared/ui/Modal/Modal';

import { SignupFormAsync } from '../SignupForm/SignupForm.async';

interface SignupModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const SignupModal = ({
    className,
    isOpen,
    onClose,
}: SignupModalProps) => {

    return (
        <Modal
            className={className}
            isOpen={isOpen}
            onClose={onClose}
            lazy
            size="l"
        >
            <Suspense fallback={<Loader />}>
                <SignupFormAsync
                    onSuccess={onClose}
                />
            </Suspense>
        </Modal>
    );
};
