import React, {Suspense} from 'react';
import {classNames} from "shared/lib";
import {Loader} from "shared/ui";
import {Modal} from "shared/ui/Modal/Modal";

import {
    UploadAvatarFormAsync
} from "../UploadAvatarForm/UploadAvatarForm.async";

interface DeleteLinkModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const UploadAvatarModal = ({ className, isOpen, onClose }: DeleteLinkModalProps) => {
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
            size="s"
        >
            <Suspense fallback={<Loader />}>
                <UploadAvatarFormAsync onSuccess={onClose} className={className} />
            </Suspense>
        </Modal>
    );
};
