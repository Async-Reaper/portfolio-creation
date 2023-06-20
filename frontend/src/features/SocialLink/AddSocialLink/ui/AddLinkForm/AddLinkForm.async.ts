import { type FC, lazy } from 'react';

import { type LoginFormProps } from './AddLinkForm';

export const AddLinkFormAsync = lazy<FC<LoginFormProps>>(
    async () => await import('./AddLinkForm'),
);
