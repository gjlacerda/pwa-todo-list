import {
    typeAdd,
    typeToggle,
    typeRemove,
    typeGet,
    typeGetStorage
} from 'constants/todo.constants';
import {
    createTodo,
    toggleTodo,
    removeTodo,
    getTodos
} from 'utils/todo.util';
import database from 'database/database';
import storage from 'database/storage';

const todosRef = database.ref('todos');

export const addAction = text => {
    return dispatch => {
        const data = {
            id: todosRef.push().key,
            text,
            done: false
        };

        createTodo(todosRef, data);

        dispatch(Object.assign(data, {
            type: typeAdd
        }));
    };
};

export const toggleAction = id => {
    return dispatch => {
        toggleTodo(todosRef, id);

        dispatch({
            type: typeToggle,
            id
        });
    };
};

export const removeAction = id => {
    return dispatch => {
        removeTodo(todosRef, id);

        dispatch({
            type: typeRemove,
            id
        });
    };
};

export const getAction = () => {
    return dispatch => {
        getTodos(todosRef, todos => {
            dispatch({
                type: typeGet,
                todos
            });
        });
    };
};

export const getFromStorageAction = () => {
    return dispatch => {
        const todos = storage.get('todos');

        dispatch({
            type: typeGetStorage,
            todos,
        });
    };
};
