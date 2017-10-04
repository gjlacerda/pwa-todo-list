import React from 'react';
import {Container} from './todo-item.styled';
import Toggle from 'components/toggle/toggle';

const TodoItem = ({todo, toggleActive}) => (
    <Container>
        <div>
            <Toggle active={todo.active}
                    onClick={() => toggleActive(todo.id)}/>
            {todo.text}
        </div>

    </Container>
);

export default TodoItem;
