export const createTodo = (todosRef, {text, id}) => {
    todosRef.push({
        id,
        text,
        done: false
    });
};

export const toggleTodo = (todosRef, id) => {
    todosRef
        .orderByChild('id')
        .equalTo(id)
        .once('child_added')
        .then(snapshot => {
            snapshot.ref.update({
                done: !snapshot.val().done
            });
        });
};

export const removeTodo = (todosRef, id) => {
    todosRef.orderByChild('id')
            .equalTo(id)
            .once('child_added')
            .then(snapshot => {
                snapshot.ref.remove();
            });
};

export const getTodos = (todosRef, callback) => {
    todosRef.orderByChild('id')
            .limitToLast(5)
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