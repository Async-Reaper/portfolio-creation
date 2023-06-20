import { type StateSchema } from 'app/providers/StoreProvider';

export const getDeleteLinkError = (state: StateSchema) => state.deleteSocialLinkForm?.error;
