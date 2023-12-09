import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux"
import 'semantic-ui-css/semantic.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { GoogleOAuthProvider } from '@react-oauth/google';

import store from "../src/store/index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="118443814001-jn6pgsbn26k6eouvrcjihis1aj406osn.apps.googleusercontent.com">
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>

    </Provider>
  </GoogleOAuthProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
