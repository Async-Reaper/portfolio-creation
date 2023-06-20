import {lazy} from 'react';

export const SignupFormAsync = lazy(
    async () => await import('./SignupForm'),
);
