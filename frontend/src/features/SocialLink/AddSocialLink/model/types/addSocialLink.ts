export interface AddSocialLink {
    link: string;
    userId: number;
}

export interface AddSocialLinkSchema {
    data?: AddSocialLink;
    result?: IResponse<any>;
    error?: string;
    isLoading: boolean;
    _inited: boolean;
}
