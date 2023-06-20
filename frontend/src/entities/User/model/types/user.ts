export interface User {
    id: Id;
    full_name: Username;
    avatar?: Avatar;
    email: Email;
    createdAt: string;
    updatedAt: string;
}

export interface UserSchema {
    authData?: User;
    signupData?: User;

    error?: string;
    isLoading: boolean;
    _inited: boolean;
}
