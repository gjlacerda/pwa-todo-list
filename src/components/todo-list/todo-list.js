import React from 'react';
import {connect} from 'react-redux';
import TodoItem from 'components/todo-item/todo-item';
import {List, Item} from './todo-list.styled';

const TodoList = ({todos}) => (
    <List>
        {todos.map(todo => (
            <Item key={todo.id}>
                <TodoItem todo={todo}/>
            </Item>
        ))}
    </List>
);

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = () => ({
    onClick: () => {
        console.log('teste');
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
