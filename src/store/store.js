import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from 'reducers/index.reducer';
import storageMiddleWare from './storageMiddleWare';
import offlineMiddleWare from './offlineMiddleWare';

const store  = createStore(reducer,
    {},
    applyMiddleware(thunk, logger, storageMiddleWare, offlineMiddleWare));

export default store;