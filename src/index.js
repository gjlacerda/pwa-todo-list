import React from 'react';
import ReactDom from 'react-dom';
import App from 'components/app/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from 'reducers/index.reducer';
import 'styled/global.styled';

const store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
