import { type StateSchema } from 'app/providers/StoreProvider';

export const getDeleteLinkLoading = (state: StateSchema) =>
    state.deleteSocialLinkForm?.isLoading || false;
