import React, {Suspense} from 'react';
import {classNames} from "shared/lib";
import {Loader} from "shared/ui";
import {Modal} from "shared/ui/Modal/Modal";

import {
    ChangeEmailFormAsync
} from "../ChangeEmailForm/ChangeEmailForm.async";

interface ChangeEmailModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const ChangeEmailModal = ({ className, isOpen, onClose }: ChangeEmailModalProps) => {
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
            size="s"
        >
            <Suspense fallback={<Loader />}>
                <ChangeEmailFormAsync onSuccess={onClose} className={className} />
            </Suspense>
        </Modal>
    );
};
