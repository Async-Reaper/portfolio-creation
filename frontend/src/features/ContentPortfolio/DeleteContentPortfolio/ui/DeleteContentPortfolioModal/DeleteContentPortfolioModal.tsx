import React, {Suspense} from 'react';
import {classNames} from "shared/lib";
import {Loader} from "shared/ui";
import {Modal} from "shared/ui/Modal/Modal";

import {
    DeleteContentPortfolioFormAsync
} from "../DeleteContentPortfolioForm/DeleteContentPortfolioForm.async";

interface DeleteLinkModalProps {
    contentId: number;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const DeleteContentPortfolioModal = ({ className, isOpen, onClose, contentId }: DeleteLinkModalProps) => {
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
            size="l"
        >
            <Suspense fallback={<Loader />}>
                <DeleteContentPortfolioFormAsync onSuccess={onClose} className={className} contentId={contentId} />
            </Suspense>
        </Modal>
    );
};
