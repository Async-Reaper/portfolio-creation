import React, {Suspense} from 'react';
import {classNames} from "shared/lib";
import {Loader} from "shared/ui";
import {Modal} from "shared/ui/Modal/Modal";

import {
    CreatePortfolioFormAsync
} from "../CreatePortfolioForm/CreatePortfolioForm.async";

interface DeleteLinkModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const CreatePortfolioModal = ({ className, isOpen, onClose }: DeleteLinkModalProps) => {
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
            size="s"
        >
            <Suspense fallback={<Loader />}>
                <CreatePortfolioFormAsync onSuccess={onClose} className={className} />
            </Suspense>
        </Modal>
    );
};
