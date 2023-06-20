import React, {Suspense} from 'react';
import {classNames} from "shared/lib";
import {Loader} from "shared/ui";
import {Modal} from "shared/ui/Modal/Modal";

import {
    ChangePortfolioFormAsync
} from "../ChangePortfolioForm/ChangePortfolioForm.async";

interface DeleteLinkModalProps {
    portfolioId: number;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const ChangePortfolioModal = ({ className, isOpen, onClose, portfolioId }: DeleteLinkModalProps) => {
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
            size="l"
        >
            <Suspense fallback={<Loader />}>
                <ChangePortfolioFormAsync onSuccess={onClose} className={className} portfolioId={portfolioId} />
            </Suspense>
        </Modal>
    );
};
