import '../conf/conf';
import '../assets/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";

window.addEventListener('load', function () {
    ReactDOM.render(<App/>, document.querySelector('#app'));
}, false);



