import {combineReducers} from 'redux';
import todoReducer from './todo.reducer';

const reducer = combineReducers({
    todos: todoReducer
});

export default reducer;
