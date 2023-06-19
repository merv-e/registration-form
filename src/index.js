import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import ProgressContextProvider from './components/store/progress-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProgressContextProvider>
    <App />
  </ProgressContextProvider>
);
