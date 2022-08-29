import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Main';
import reportWebVitals from './reportWebVitals';
import './res/fonts/Aller/Aller_Rg.ttf';
import './res/fonts/Tex/texgyreadventor-regular.otf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
