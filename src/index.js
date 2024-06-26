import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './i18n';
import './index.scss';
import { Provider } from 'react-redux';

import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/vacation-time">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense>
            <App />
          </Suspense>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
