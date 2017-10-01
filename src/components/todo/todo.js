import React from 'react';
import TodoAdd from 'components/todo-add/todo-add';
import TodoList from 'components/todo-list/todo-list';
import {Container, Content} from './todo.styled';

const Todo = () => (
    <Container>
        <Content>
            <TodoAdd/>
            <TodoList/>
        </Content>
    </Container>
);

export default Todo;
