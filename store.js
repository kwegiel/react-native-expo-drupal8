import { createStore, combineReducers, applyMiddleware } from 'redux';

import apiReducer from './reducers/apiReducer';
import actionReducer from './reducers/actionReducer';
import thunk  from 'redux-thunk';

export default createStore(
    combineReducers(
        {
            apiReducer,
            actionReducer
    }), {}, applyMiddleware(thunk()));
