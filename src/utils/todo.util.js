const todoUtil = (todosRef) => {

    const getTodos = (callback) => {
        todosRef.orderByChild('id')
                .once('value')
                .then(snapshot => {
                    const value = snapshot.val() || [];
                    const todos = Object
                        .keys(value)
                        .map(todo => value[todo])
                        .reverse();

                    if (callback) {
                        callback(todos);
                    }
                });
    };

    return {
        createTodo: ({text, id}) => {
            todosRef.push({
                id,
                text,
                done: false
            });
        },

        toggleTodo: (id) => {
            todosRef
                .orderByChild('id')
                .equalTo(id)
                .once('child_added')
                .then(snapshot => {
                    snapshot.ref.update({
                        done: !snapshot.val().done
                    });
                });
        },

        removeTodo: (id) => {
            todosRef.orderByChild('id')
                    .equalTo(id)
                    .once('child_added')
                    .then(snapshot => {
                        snapshot.ref.remove();
                    });
        },

        getTodos: getTodos,

        saveToStorage: (storage) => {
            getTodos(todos => {
                storage.set('todos', todos);
            });
        }
    };
};

export default todoUtil;