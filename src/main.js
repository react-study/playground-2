import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';
import {Provider} from 'react-redux';

import App from './components/App';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/(:filter)" component={App} />
        </Router>
    </Provider>
    , document.getElementById('root')
);
