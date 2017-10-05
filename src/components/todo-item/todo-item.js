import React from 'react';
import {Container, LeftContent, Text} from './todo-item.styled';
import Toggle from 'components/toggle/toggle';
import Remove from 'components/remove/remove';

const TodoItem = ({todo, toggleTodo, removeTodo}) => (
    <Container>
        <LeftContent>
            <Toggle done={todo.done}
                    onClick={() => toggleTodo(todo.id)}/>
            <Text done={todo.done}>{todo.text}</Text>
        </LeftContent>
        <Remove onClick={() => removeTodo(todo.id)}>&times;</Remove>
    </Container>
);

export default TodoItem;
