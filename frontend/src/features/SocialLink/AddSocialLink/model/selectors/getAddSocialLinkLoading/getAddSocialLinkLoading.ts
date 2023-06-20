import {type StateSchema} from "app/providers/StoreProvider";

export const getAddSocialLinkLoading = (state: StateSchema) => state.addSocialLinkForm?.isLoading
