import {type as addType} from 'actions/todo.action';

const todo = (state = [], action) => {
    switch (action.type) {
        case addType:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ];
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