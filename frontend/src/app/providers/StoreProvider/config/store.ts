import {configureStore, type ReducersMapObject} from '@reduxjs/toolkit';
import {type CombinedState, type Reducer} from 'redux';
import {type StateSchema, type ThunkExtraArg} from './StateSchema';
import {createReducerManager} from './reducerManager';
import {$api} from 'shared/protocols/api/api';
import {createSocketClient} from 'shared/protocols/websocket';
import {userReducer} from 'entities/User';
import {portfolioReducer} from "entities/Portfolio";
import {portfolioCardReducer} from "widgets/PortfolioCard";
import {profileReducer} from "widgets/Profile";
import {portfolioUserReducer} from "widgets/PortfolioUser";
import {allPortfolioReducer} from "widgets/AllPortfolio";
import {contentPortfolioReducer} from "entities/ContentPortfolio";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        portfolio: portfolioReducer,
        allPortfolio: allPortfolioReducer,
        portfolioCard: portfolioCardReducer,
        profile: profileReducer,
        portfolioUser: portfolioUserReducer,
        contentPortfolio: contentPortfolioReducer
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
        socket: createSocketClient(__SOCKET__),
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
                serializableCheck: false,
            }),
    });

    // @ts-expect-error
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
