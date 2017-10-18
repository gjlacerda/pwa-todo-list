import todoUtil from 'utils/todo.util';
import database from 'database/database';
import storage from 'database/storage';
import {
    typeAdd,
    typeToggle,
    typeRemove,
    typeGet,
    typeGetStorage
} from 'constants/todo.constants';

const todosRef = database.ref('todos');
const {
    createTodo,
    toggleTodo,
    removeTodo,
    getTodos
} = todoUtil(todosRef);

export const addAction = text => {
    return dispatch => {
        const data = {
            id: todosRef.push().key,
            text,
            done: false
        };

        createTodo(data);

        dispatch(Object.assign(data, {
            type: typeAdd
        }));
    };
};

export const toggleAction = id => {
    return dispatch => {
        toggleTodo(id);

        dispatch({
            type: typeToggle,
            id
        });
    };
};

export const removeAction = id => {
    return dispatch => {
        removeTodo(id);

        dispatch({
            type: typeRemove,
            id
        });
    };
};

export const getAction = () => {
    return dispatch => {
        getTodos(todos => {
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
