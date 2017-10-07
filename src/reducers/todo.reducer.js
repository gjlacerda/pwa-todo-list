import {
    typeAdd,
    typeToggle,
    typeRemove
} from 'actions/todo.action';

const addTodo = (state = [], action) => {
    return [
        ...state,
        {
            id: action.id,
            text: action.text,
            done: action.done
        }
    ];
};

const toggleTodo = (state = [], action) => {
    return state.map(todo =>
        todo.id === action.id
            ? Object.assign({}, todo, {done: !todo.done})
            : todo
    );
};

const todo = (state = [], action) => {
    switch (action.type) {
        case typeAdd:
            return addTodo(state, action);
        case typeToggle:
            return toggleTodo(state, action);
        case typeRemove:
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
};

export default todo;