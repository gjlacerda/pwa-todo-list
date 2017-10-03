import React from 'react';
import {Container} from './todo-item.styled';

const TodoItem = ({todo}) => (
    <Container>
        {todo.text}
    </Container>
);

export default TodoItem;
