import { type ValidateAuthFormError } from '../consts/validateAuthFormErrorConsts';

export interface LoginSchema {
    email: string;
    password: string;
    isLoading: boolean;
    validateError?: ValidateAuthFormError[];
}
