import { type StateSchema } from 'app/providers/StoreProvider';

export const getUploadAvatarError = (state: StateSchema) => state.uploadAvatarForm?.error;
