import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import bodyBackground from './assets/header_bg.jpeg';
import footerBackground from './assets/foot_bkgd.png';

document.documentElement.style.setProperty('--body-background', `url(${bodyBackground})`);
document.documentElement.style.setProperty('--footer-background', `url(${footerBackground})`);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
