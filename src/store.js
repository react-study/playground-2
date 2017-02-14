import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import bankReducer from './reducer/bank';
import tabReducer from './reducer/tab';

const store = createStore(
    combineReducers({
        bank: bankReducer,
        tab: tabReducer
    }),
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;