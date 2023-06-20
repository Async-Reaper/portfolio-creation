import {type AnyAction, type EnhancedStore, type Reducer, type ReducersMapObject,} from '@reduxjs/toolkit';
import {type CombinedState} from 'redux';
import {type AxiosInstance} from 'axios';
import {type Socket} from 'socket.io-client';
import {type UserSchema} from 'entities/User';
import {type AlertSchema} from 'entities/Alerts/model/types/alertsSchema';
import {SocialLinksSchema} from "entities/SocialLink";
import {AddSocialLinkSchema} from "features/SocialLink/AddSocialLink";
import {DeleteLinkSchema} from "features/SocialLink/DeleteSocialLink";
import {LoginSchema} from "features/User/AuthUser";
import {SignupSchema} from "features/User/SignupUser";
import {ChangeEmailSchema} from "features/User/ChangeEmail";
import {ChangePasswordSchema} from "features/User/ChangePassword";
import {PortfolioSchema} from "entities/Portfolio";
import {CreatePortfolioSchema} from "features/Portfolio/CreatePortfolio";
import {DeletePortfolioSchema} from "features/Portfolio/DeletePortfolio";
import {ChangePortfolioSchema} from "features/Portfolio/ChangePortfolio";
import {ContentPortfolioSchema} from "entities/ContentPortfolio";
import {CreateContentPortfolioSchema} from "features/ContentPortfolio/CreateContentPortfolio";
import {ChangeContentPortfolioSchema} from "features/ContentPortfolio/ChangeContentPortfolio";
import {DeleteContentPortfolioSchema} from "features/ContentPortfolio/DeleteContentPortfolio";
import {PortfolioCardSchema} from "widgets/PortfolioCard";
import {UploadAvatarSchema} from "features/User/UploadAvatar";
import {ProfileSchema} from "widgets/Profile";
import {PortfolioUserSchema} from "widgets/PortfolioUser";
import {AllPortfolioSchema} from "widgets/AllPortfolio";

export interface StateSchema {
    user: UserSchema;
    portfolio: PortfolioSchema;
    portfolioCard: PortfolioCardSchema;
    profile: ProfileSchema;
    portfolioUser: PortfolioUserSchema;
    allPortfolio: AllPortfolioSchema;
    contentPortfolio: ContentPortfolioSchema;

    // Асинхронные редюсеры
    createPortfolioForm?: CreatePortfolioSchema;
    changePortfolioForm?: ChangePortfolioSchema;
    deletePortfolioForm?: DeletePortfolioSchema;
    createContentPortfolioForm?: CreateContentPortfolioSchema;
    changeContentPortfolioForm?: ChangeContentPortfolioSchema;
    deleteContentPortfolioForm?: DeleteContentPortfolioSchema;
    addSocialLinkForm?: AddSocialLinkSchema;
    deleteSocialLinkForm?: DeleteLinkSchema;
    socialLinks?: SocialLinksSchema;
    alerts?: AlertSchema;
    loginForm?: LoginSchema;
    signupForm?: SignupSchema;
    changeEmailForm?: ChangeEmailSchema;
    changePasswordForm?: ChangePasswordSchema;
    uploadAvatarForm?: UploadAvatarSchema
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export type ReduxStoreWithManager = {
    reducerManager: ReducerManager;
} & EnhancedStore<StateSchema>;

export interface ThunkExtraArg {
    api: AxiosInstance;
    socket: Socket;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
}
