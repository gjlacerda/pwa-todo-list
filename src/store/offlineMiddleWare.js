import storage from 'database/storage';

// eslint-disable-next-line no-unused-vars
const offlineMiddleWare = store => next => action => {
    if (action.type === 'ADD_TODO') {
        if (!navigator.onLine) {
            const offlineTodos = storage.get('syncTodos') || [];

            storage.set('syncTodos', [
                ...offlineTodos,
                action
            ]);
        }
    }

    next(action);
};

export default offlineMiddleWare;