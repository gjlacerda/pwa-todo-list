import React from 'react';
import {Container, Input} from './todo-add.styled';
import {connect} from 'react-redux';
import {addAction} from 'actions/todo.action';

const TodoAdd = ({dispatch}) => {
    const onKeyDown = event => {
        const value = event.target.value;

        if (!value || event.keyCode !== 13) {
            return;
        }

        dispatch(addAction(event.target.value));
        event.target.value = '';
    };

    return (
        <Container>
            <Input type="text"
                   placeholder="Add new todo"
                   onKeyDown={onKeyDown}
                   innerRef={input => input.focus()}/>
        </Container>
    );
};

export default connect()(TodoAdd);
