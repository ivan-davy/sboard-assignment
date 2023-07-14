import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import HistoryRouter from './components/history-router/history-router';
import browserHistory from './browser-history';

//store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <HistoryRouter history={browserHistory} basename={''}>
      <ToastContainer />
      <App />
    </HistoryRouter>
  </React.StrictMode>,
);
