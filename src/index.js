import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';  // This import should now work
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
