import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from 'reducers/index.reducer';

const store  = createStore(reducer,
    {},
    applyMiddleware(thunk, logger));

export default store;