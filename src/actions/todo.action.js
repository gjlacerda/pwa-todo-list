export const typeAdd      = 'ADD_TODO';
export const typeToggle   = 'TOGGLE_TODO';
export const typeRemove = 'REMOVE_TODO';

export let id = 0;

export const addAction = text => ({
    type: typeAdd,
    id: id++,
    text,
    done: false
});

export const toggleAction = id => ({
    type: typeToggle,
    id
});

export const removeAction = id => ({
    type: typeRemove,
    id
});