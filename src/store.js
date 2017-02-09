import { createStore } from 'redux';
import bankReducer from './reducer/bank';

const store = createStore(bankReducer);

export default store;