import React from 'react';
import {Container, Input} from './todo-add.styled';
import PropTypes from 'prop-types';
import {addTodo} from 'actions/todo.action';

class TodoAdd extends React.Component {
    componentDidMount() {
        const {store} = this.context;

        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnMount() {
        this.unsubscribe();
    }

    render() {
        const {store} = this.context;
        const state = store.getState();

        return (
            <Container>
                <Input type="text" placeholder="Add new todo" onClick={() => {
                    store.dispatch(addTodo('teste'));
                    console.log(state);
                }}/>
            </Container>
        );
    }
}

TodoAdd.contextTypes = {
    store: PropTypes.object
};

export default TodoAdd;