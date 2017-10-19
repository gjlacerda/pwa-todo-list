import storage from 'database/storage';
import database from 'database/database';
import todoUtil from 'utils/todo.util';

const {syncFromStorage} = todoUtil(database.ref('todos'));

// eslint-disable-next-line no-unused-vars
const syncMiddleWare = store => next => action => {
    syncFromStorage(storage);
    next(action);
};

export default syncMiddleWare;