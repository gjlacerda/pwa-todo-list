import React from 'react';
import TodoAdd from 'containers/todo-add/todo-add';
import TodoList from 'containers/todo-list/todo-list';
import {Container, Content} from './app.styled';

const App = () => (
    <Container>
        <Content>
            <TodoAdd/>
            <TodoList/>
        </Content>
    </Container>
);

export default App;
