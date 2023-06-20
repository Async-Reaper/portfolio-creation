import { type StateSchema } from 'app/providers/StoreProvider';

export const getUploadAvatarLoading = (state: StateSchema) =>
    state.uploadAvatarForm?.isLoading || false;
