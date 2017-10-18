import React from 'react';
import TodoAdd from 'containers/todo-add/todo-add';
import TodoList from 'containers/todo-list/todo-list';
import {Container} from './todo.styled';

const Todo = () => (
    <Container>
        <TodoAdd/>
        <TodoList/>
    </Container>
);

export default Todo;
