import {createStore} from 'redux';
import todoReducer from './reducers/todos';

const store = createStore(
    todoReducer
);

export default store;
