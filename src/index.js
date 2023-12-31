import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css';
import './styles/app.css';
import App from './app';
import ScrollToTop from './utils/ScrollToTop';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);