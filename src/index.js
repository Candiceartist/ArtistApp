import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from './context/ActivityContext';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <Provider>
    <App />
  </Provider>
);
