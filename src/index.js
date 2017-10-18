import React from 'react';
import ReactDom from 'react-dom';
import App from 'components/app/app';
import {Provider} from 'react-redux';
import store from 'store/store';
import storage from 'database/storage';
import database from 'database/database';
import {syncFromStorage} from 'utils/todo.util';
import 'styled/global.styled';

store.subscribe(() => {
    syncFromStorage(database.ref('todos'), storage);
});

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
