import React from 'react';
import {Container, Input} from './todo-add.styled';
import {connect} from 'react-redux';
import {addTodo} from 'actions/todo.action';

const TodoAdd = ({dispatch}) => {
    return (
        <Container>
            <Input type="text"
                   placeholder="Add new todo"
                   onClick={(e) => {
                       dispatch(addTodo(e.target.value));
                   }}/>
        </Container>
    );
};

export default connect()(TodoAdd);