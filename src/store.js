import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import todoReducer from './reducers/todos';

const store = createStore(
    todoReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
