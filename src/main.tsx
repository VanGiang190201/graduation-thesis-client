import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { theme } from './Utils/theme';
import store, { persistor } from './reudux/store';
import GlobalStyle from './Components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <App />
                    <GlobalStyle />
                </BrowserRouter>
            </PersistGate>
        </ThemeProvider>
    </Provider>,
    // </React.StrictMode>
);
