import React from 'react';
import {connect} from 'react-redux';
import TodoItem from 'components/todo-item/todo-item';
import {List, Item} from './todo-list.styled';
import {toggleTodo} from 'actions/todo.action';

const TodoList = ({todos, toggleActive}) => (
    <List>
        {todos.map(todo => (
            <Item key={todo.id}>
                <TodoItem todo={todo}
                          toggleActive={toggleActive}/>
            </Item>
        ))}
    </List>
);

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    toggleActive: id => {
        dispatch(toggleTodo(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
