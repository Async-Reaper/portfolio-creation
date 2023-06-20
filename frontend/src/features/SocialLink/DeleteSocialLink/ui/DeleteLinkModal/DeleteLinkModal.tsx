import React, {Suspense} from 'react';
import {classNames} from "shared/lib";
import {Loader} from "shared/ui";
import {Modal} from "shared/ui/Modal/Modal";

import {DeleteLinkFormAsync} from "../DeleteLinkForm/DeleteLinkForm.async";

interface DeleteLinkModalProps {
    linkId: number;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const DeleteLinkModal = ({ className, isOpen, onClose, linkId }: DeleteLinkModalProps) => {
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
            size="s"
        >
            <Suspense fallback={<Loader />}>
                <DeleteLinkFormAsync onSuccess={onClose} linkId={linkId} />
            </Suspense>
        </Modal>
    );
};
