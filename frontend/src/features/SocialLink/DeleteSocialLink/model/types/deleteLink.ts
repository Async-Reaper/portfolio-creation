import {type SocialLinks} from "entities/SocialLink";

export interface DeleteLinkSchema {
    data?: SocialLinks;
    isLoading: boolean;
    error?: string;
}
