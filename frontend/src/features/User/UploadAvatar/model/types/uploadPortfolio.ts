export interface UploadAvatar {
    avatar: string;
}

export interface UploadAvatarSchema {
    data?: UploadAvatar;
    isLoading: boolean;
    error?: string;
}
