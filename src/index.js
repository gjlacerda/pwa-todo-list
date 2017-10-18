import React from 'react';
import ReactDom from 'react-dom';
import App from 'components/app/app';
import {Provider} from 'react-redux';
import store from 'store/store';
import storage from 'database/storage';
import database from 'database/database';
import todoUtil from 'utils/todo.util';
import 'styled/global.styled';

const {
    syncFromStorage
} = todoUtil(database.ref('todos'));

store.subscribe(() => {
    syncFromStorage(storage);
});

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
