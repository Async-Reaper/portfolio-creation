import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';
import { StoreProvider } from 'app/providers/StoreProvider';
import AlertsSystem from 'entities/Alerts/ui/AlertsSystem/AlertsSystem';

import './app/styles/index.scss';

render(
    <BrowserRouter>
        <StoreProvider>
            <App />
            <AlertsSystem />
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
