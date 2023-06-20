import {type StateSchema} from "app/providers/StoreProvider";

export const getEmailData = (state: StateSchema) => state.changeEmailForm?.newEmail || ''
