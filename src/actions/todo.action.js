export const type = 'ADD_TODO';

let id = 0;
export const addTodo = text => ({
    id: id++,
    type,
    text
});