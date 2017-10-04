import React from 'react';
import {Container, LeftContent, Text} from './todo-item.styled';
import Toggle from 'components/toggle/toggle';

const TodoItem = ({todo, toggleActive}) => (
    <Container>
        <LeftContent>
            <Toggle active={todo.active}
                    onClick={() => toggleActive(todo.id)}/>
            <Text>{todo.text}</Text>
        </LeftContent>

    </Container>
);

export default TodoItem;
