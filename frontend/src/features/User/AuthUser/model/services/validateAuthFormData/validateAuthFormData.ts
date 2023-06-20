import { ValidateAuthFormError } from '../../consts/validateAuthFormErrorConsts';
import { type LoginFormDataProps } from '../../types/loginFormData';

export const validateAuthFormData = (formData: LoginFormDataProps) => {
    const errors: ValidateAuthFormError[] = [];

    if (!formData) {
        errors.push(ValidateAuthFormError.NO_DATA);
    }

    const { email, password } = formData;

    if (!email || !password) {
        errors.push(ValidateAuthFormError.INCORRECT_AUTH_FORM_DATA);
    }

    if (!email) {
        errors.push(ValidateAuthFormError.INCORRECT_AUTH_FORM_USERNAME);
    }

    if (!password) {
        errors.push(ValidateAuthFormError.INCORRECT_AUTH_FORM_PASSWORD);
    }

    return errors;
};
