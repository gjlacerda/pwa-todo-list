export const sync = (storage, database) => {
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

            storage.set('todos', todos);
        });
};

export default sync;