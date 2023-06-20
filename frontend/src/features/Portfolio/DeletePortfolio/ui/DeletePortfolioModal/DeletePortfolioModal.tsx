import React, {Suspense} from 'react';
import {classNames} from "shared/lib";
import {Loader} from "shared/ui";
import {Modal} from "shared/ui/Modal/Modal";

import {DeletePortfolioFormAsync} from "../DeletePortfolioForm/DeletePortfolioForm.async";

interface DeleteLinkModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    portfolioId: any;
}

export const DeletePortfolioModal = ({ className, isOpen, onClose, portfolioId }: DeleteLinkModalProps) => {
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
            size="l"
        >
            <Suspense fallback={<Loader />}>
                <DeletePortfolioFormAsync onSuccess={onClose} className={className} portfolioId={portfolioId} />
            </Suspense>
        </Modal>
    );
};
