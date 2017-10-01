import React from 'react';
import TodoItem from 'components/todo-item/todo-item';
import {List, Item} from './todo-list.styled';

const TodoList = () => (
    <List>
        <Item>
            <TodoItem/>
        </Item>
        <Item>
            <TodoItem/>
        </Item>
        <Item>
            <TodoItem/>
        </Item>
        <Item>
            <TodoItem/>
        </Item>
        <Item>
            <TodoItem/>
        </Item>
    </List>
);

export default TodoList;
