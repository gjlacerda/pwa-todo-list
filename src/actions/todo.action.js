export const typeAdd   = 'ADD_TODO';
export const typeToggle = 'TOGGLE_TODO';

export let id = 0;

export const addTodo = text => ({
    type : typeAdd,
    id: id++,
    text,
    done: false
});

export const toggleTodo = id => ({
    type: typeToggle,
    id
});
