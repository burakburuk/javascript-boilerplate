import './conf';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";

window.addEventListener('load', function () {
    ReactDOM.render(<App/>, document.querySelector('#app'));
}, false);



