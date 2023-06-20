export interface SignupSchema {
    full_name: string;
    password: string;
    email: string;
    isLoading: boolean;
    error?: string;
}
