import React from 'react';
import {connect} from 'react-redux';
import TodoItem from 'components/todo-item/todo-item';
import {List, Item} from './todo-list.styled';
import {
    toggleAction,
    removeAction,
    getAction,
    getFromStorageAction
} from 'actions/todo.action';

const TodoList = ({todos, toggleTodo, removeTodo}) => (
    <List>
        {todos.map(todo => (
            <Item key={todo.id}>
                <TodoItem todo={todo}
                          toggleTodo={toggleTodo}
                          removeTodo={removeTodo}/>
            </Item>
        ))}
    </List>
);

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => {
    dispatch(getFromStorageAction());
    dispatch(getAction());

    return {
        toggleTodo: id => {
            dispatch(toggleAction(id));
        },
        removeTodo: id => {
            dispatch(removeAction(id));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
