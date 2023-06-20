import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Layout } from 'app/layout';
import { AppRouter } from 'app/providers/Router';
import { getUserInited, initAuthData } from 'entities/User';
import { getUserAuthError } from 'entities/User/model/selectors/getUserAuthError/getUserAuthError';
import { useAppDispatch } from 'shared/lib/hooks';
import { PageLoader } from 'shared/ui';

function App() {
    const serverError = useSelector(getUserAuthError);
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    React.useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    // if (serverError === 'NO_CONNECTION') {
    //     console.log(serverError);
    //     return <DisableApp />;
    // }
    //
    // if (!inited) {
    //     return <PageLoader />;
    // }

    return (
        <div className="app">
            <Suspense fallback={<PageLoader />}>
                <Layout>{inited && <AppRouter />}</Layout>
            </Suspense>
        </div>
    );
}

export default App;
