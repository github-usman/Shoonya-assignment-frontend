import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApiParamsProvider } from './contexts/ApiParamsContexts';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApiParamsProvider>
    <App />
  </ApiParamsProvider>
);
