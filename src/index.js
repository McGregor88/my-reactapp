import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import myApp from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store = createStore(myApp);

function render () {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
registerServiceWorker();

store.subscribe(render);

render();
