import {
    typeAdd,
    typeToggle,
    typeRemove,
    typeGet,
    typeGetStorage
} from 'constants/todo.constants';

const addTodo = (state = [], action) => {
    return [
        {
            id: action.id,
            text: action.text,
            done: action.done
        },
        ...state
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
        case typeGet:
            return [...action.todos];
        case typeGetStorage:
            return [...action.todos];
        default:
            return state;
    }
};

export default todo;
