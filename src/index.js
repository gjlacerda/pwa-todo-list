import React from 'react';
import ReactDom from 'react-dom';
import Todo from 'containers/todo/todo';
import 'styled/global.styled';

ReactDom.render(
    <Todo/>,
    document.getElementById('root')
);