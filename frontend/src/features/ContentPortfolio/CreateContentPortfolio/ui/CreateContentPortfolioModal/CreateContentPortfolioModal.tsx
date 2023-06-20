import React, {Suspense} from 'react';
import {classNames} from "shared/lib";
import {Loader} from "shared/ui";
import {Modal} from "shared/ui/Modal/Modal";

import {
    CreateContentPortfolioFormAsync
} from "../CreateContentPortfolioForm/CreateContentPortfolioForm.async";

interface CreateContentPortfolioModalProps {
    portfolioId: string | undefined;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const CreateContentPortfolioModal = ({ className, isOpen, onClose, portfolioId }: CreateContentPortfolioModalProps) => {
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
            size="l"
        >
            <Suspense fallback={<Loader />}>
                <CreateContentPortfolioFormAsync onSuccess={onClose} className={className} portfolioId={portfolioId} />
            </Suspense>
        </Modal>
    );
};
