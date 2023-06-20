import {type StateSchema} from "app/providers/StoreProvider";

export const getSocialLink = (state: StateSchema) => state.addSocialLinkForm?.data?.link;
