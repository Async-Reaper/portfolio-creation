import {type StateSchema} from "app/providers/StoreProvider";

export const getAddSocialLinkErrors = (state: StateSchema) => state.addSocialLinkForm?.error;
