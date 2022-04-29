import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import { Provider } from "react-redux";
import store from "./redux/store";
import "./i18n";

ReactDOM.render(
    <Provider store={store}>
        <App />
        </Provider>
   
    , document.querySelector('#root'));