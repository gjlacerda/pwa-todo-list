import React from 'react';
import ReactDom from 'react-dom';
import App from 'components/app/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoReducer from 'reducers/todo.reducer';
import 'styled/global.styled';

const store = createStore(todoReducer);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
