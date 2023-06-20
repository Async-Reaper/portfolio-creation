import {type StateSchema} from "app/providers/StoreProvider";

export const getSocialLinksError = (state: StateSchema) => state.socialLinks?.error
