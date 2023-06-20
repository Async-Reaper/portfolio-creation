import React, {Suspense} from 'react';
import {classNames} from "shared/lib";
import {Loader} from "shared/ui";
import {Modal} from "shared/ui/Modal/Modal";

import {
    ChangeContentPortfolioFormAsync
} from "../ChangeContentPortfolioForm/ChangeContentPortfolioForm.async";

interface DeleteLinkModalProps {
    contentId: number;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const ChangeContentPortfolioModal = ({ className, isOpen, onClose, contentId }: DeleteLinkModalProps) => {
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
            size="l"
        >
            <Suspense fallback={<Loader />}>
                <ChangeContentPortfolioFormAsync onSuccess={onClose} className={className} contentId={contentId} />
            </Suspense>
        </Modal>
    );
};
