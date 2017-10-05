import {
    typeAdd,
    typeToggle
} from 'actions/todo.action';

const todo = (state = [], action) => {
    switch (action.type) {
        case typeAdd:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    done: action.done
                }
            ];
        case typeToggle:
            return state.map(todo =>
                todo.id === action.id
                    ? Object.assign({}, todo, {done: !todo.done})
                    : todo
            );
        default:
            return state;
    }
};

const reducer = (state = {}, action)  => {
    return {
        todos: todo(
            state.todos,
            action
        )
    };
};

export default reducer;
