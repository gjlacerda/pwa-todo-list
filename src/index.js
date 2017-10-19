import React from 'react';
import ReactDom from 'react-dom';
import App from 'components/app/app';
import {Provider} from 'react-redux';
import store from 'store/store';
import 'styled/global.styled';

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
