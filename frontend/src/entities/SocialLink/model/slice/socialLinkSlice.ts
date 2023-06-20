import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {addSocialLinkActions} from "features/SocialLink/AddSocialLink";
import {deleteLinkActions} from "features/SocialLink/DeleteSocialLink";

import {initSocialLink} from "../services/initSocialLink/initSocialLink";
import {type SocialLinks, type SocialLinksSchema} from "../types/socialLinks";

const initialState: SocialLinksSchema = {
    isLoading: false,
    error: undefined,
    _inited: false,
}

const socialLinkSlice = createSlice({
    name: 'socialLink',
    initialState,
    reducers: {
        setSocialLinksData(state, action: PayloadAction<SocialLinks[]>) {
            state.socialLinks = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(initSocialLink.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(initSocialLink.fulfilled, (state, action) => {
                state.isLoading = false;
                state.socialLinks = action.payload;
            })
            .addCase(initSocialLink.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state._inited = true;
            })
            .addCase(addSocialLinkActions.setLinkData, (state, action) => {
                state.socialLinks?.push(action.payload)
            })
            .addCase(deleteLinkActions.deleteLink, (state, action: PayloadAction<SocialLinks>) => {
                state.socialLinks = state.socialLinks?.filter(socialLink => socialLink.id === action.payload.id)
            });
    }
})

export const {actions: socialLinkActions} = socialLinkSlice;
export const {reducer: socialLinkReducer} = socialLinkSlice;
