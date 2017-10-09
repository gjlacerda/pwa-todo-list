import {
    typeAdd,
    typeToggle,
    typeRemove,
    typeGet
} from 'constants/todo.constants';
import database from 'database/database';

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

        todosRef.once('child_added').then(snapshot => {
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

        todosRef.once('child_added').then(snapshot => {
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
                            .orderByChild('id');

        todosRef.once('value').then(snapshot => {
            const value = snapshot.val() || [];
            const todos = Object.keys(value).map(todo => value[todo]);

            dispatch({
                type: typeGet,
                todos
            });
        });
    };
};
