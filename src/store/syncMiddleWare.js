import storage from 'database/storage';
import database from 'database/database';
import todoUtil from 'utils/todo.util';
import {typeGetStorage} from 'constants/todo.constants.js';

const {syncFromStorage} = todoUtil(database.ref('todos'));

// eslint-disable-next-line no-unused-vars
const syncMiddleWare = store => next => action => {
    if (action.type !== typeGetStorage) {
        syncFromStorage(storage);
    }
    next(action);
};

export default syncMiddleWare;