import React from 'react';
import {Container, LeftContent, Text} from './todo-item.styled';
import Toggle from 'components/toggle/toggle';

const TodoItem = ({todo, toggleActive}) => (
    <Container>
        <LeftContent>
            <Toggle done={todo.done}
                    onClick={() => toggleActive(todo.id)}/>
            <Text done={todo.done}>{todo.text}</Text>
        </LeftContent>

    </Container>
);

export default TodoItem;
