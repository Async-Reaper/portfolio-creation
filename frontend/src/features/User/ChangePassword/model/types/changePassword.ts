export interface ChangePassword {
    oldPassword: string;
    newPassword: string;
}

export interface ChangePasswordSchema {
    isLoading: boolean;
    error?: string;
}
