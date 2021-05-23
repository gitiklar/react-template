import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';

const reducer = combineReducers({ userReducer });

const store = createStore(reducer , applyMiddleware(thunk));
window.store = store;
export default store;