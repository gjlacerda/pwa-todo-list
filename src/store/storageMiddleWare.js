import storage from 'database/storage';
import database from 'database/database';
import todoUtil from 'utils/todo.util';
import {typeGetStorage} from 'constants/todo.constants.js';

const {saveToStorage} = todoUtil(database.ref('todos'));

// eslint-disable-next-line no-unused-vars
const storageMiddleWare = store => next => action => {
    if (action.type !== typeGetStorage) {
        saveToStorage(storage);
    }
    next(action);
};

export default storageMiddleWare;