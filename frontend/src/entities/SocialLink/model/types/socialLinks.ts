export interface SocialLinks {
    id: number;
    link: string;
}

export interface SocialLinksSchema {
    socialLinks?: SocialLinks[];
    error?: string;
    isLoading: boolean;
    _inited: boolean;
}
