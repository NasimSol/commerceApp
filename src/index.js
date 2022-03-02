import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <App />
   
    , document.querySelector('#root'));