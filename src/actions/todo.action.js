import {
    typeAdd,
    typeToggle,
    typeRemove,
    typeGet,
    typeGetStorage
} from 'constants/todo.constants';
import database from 'database/database';
import storage from 'database/local-storage';

export const addAction = text => {
    return dispatch => {
        const todosRef = database.ref('todos');
        const id       = todosRef.push().key;
        const todoData = {
            id,
            text,
            done: false
        };

        todosRef.push(todoData);

        dispatch(Object.assign(todoData, {
            type: typeAdd
        }));
    };
};

export const toggleAction = id => {
    return dispatch => {
        const todosRef = database
            .ref('todos')
            .orderByChild('id')
            .equalTo(id);

        todosRef
            .once('child_added')
            .then(snapshot => {
                snapshot.ref.update({
                    done: !snapshot.val().done
                });
            });

        dispatch({
            type: typeToggle,
            id
        });
    };
};

export const removeAction = id => {
    return dispatch => {
        const todosRef = database
            .ref('todos')
            .orderByChild('id')
            .equalTo(id);

        todosRef
            .once('child_added')
            .then(snapshot => {
                snapshot.ref.remove();
            });

        dispatch({
            type: typeRemove,
            id
        });
    };
};

export const getAction = () => {
    return dispatch => {
        const todosRef = database
            .ref('todos')
            .orderByChild('id')
            .limitToLast(5);

        todosRef
            .once('value')
            .then(snapshot => {
                const value = snapshot.val() || [];
                const todos = Object
                    .keys(value)
                    .map(todo => value[todo])
                    .reverse();

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