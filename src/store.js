import { createStore } from 'redux';
import bankReducer from './reducer/bank';

const store = createStore(
    bankReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;