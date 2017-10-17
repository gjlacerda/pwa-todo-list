import React from 'react';
import ReactDom from 'react-dom';
import App from 'components/app/app';
import {Provider} from 'react-redux';
import store from 'store/store';
import storage from 'database/storage';
import database from 'database/database';
import sync from 'utils/sync.util';
import 'styled/global.styled';

store.subscribe(() => {
    sync(storage, database, 5);
});

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
