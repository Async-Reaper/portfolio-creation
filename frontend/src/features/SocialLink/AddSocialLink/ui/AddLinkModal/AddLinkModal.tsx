import React, {Suspense} from 'react';
import {classNames} from "shared/lib";
import {Loader} from "shared/ui";
import {Modal} from "shared/ui/Modal/Modal";

import {AddLinkFormAsync} from "../AddLinkForm/AddLinkForm.async";

interface AddLinkModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const AddLinkModal = ({ className, isOpen, onClose }: AddLinkModalProps) => {
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
            size="s"
        >
            <Suspense fallback={<Loader />}>
                <AddLinkFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
