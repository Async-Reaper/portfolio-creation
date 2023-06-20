import React, {Suspense} from 'react';
import {classNames} from "shared/lib";
import {Loader} from "shared/ui";
import {Modal} from "shared/ui/Modal/Modal";

import {
    ChangePasswordAsync
} from "../ChangePasswordForm/ChangePassword.async";

interface ChangePasswordModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const ChangePasswordModal = ({ className, isOpen, onClose }: ChangePasswordModalProps) => {
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
            size="s"
        >
            <Suspense fallback={<Loader />}>
                <ChangePasswordAsync onSuccess={onClose} className={className} />
            </Suspense>
        </Modal>
    );
};
