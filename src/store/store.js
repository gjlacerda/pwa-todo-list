import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from 'reducers/index.reducer';
import syncMiddleWare from './syncMiddleWare';

const store  = createStore(reducer,
    {},
    applyMiddleware(thunk, logger, syncMiddleWare));

export default store;