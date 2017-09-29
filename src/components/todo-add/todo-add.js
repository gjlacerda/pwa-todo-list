import React from 'react';
import {Container, Input} from './todo-add.styled';

const TodoAdd = () => (
    <Container>
        <Input type="text" placeholder="Add new todo"/>
    </Container>
);

export default TodoAdd;