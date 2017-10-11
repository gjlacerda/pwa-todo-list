import {injectGlobal} from 'styled-components';
import {grayMain} from './colors.styled';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');

    * {
        box-sizing: border-box;
    }

    html,
    body,
    #root {
        height: 100%;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    body {
        font-family: "Source Sans Pro";
        font-weight: 400;
        box-sizing: border-box;
        font-weight: 500;
        background: #f5f5f5;
        font-size: 20px;
        color: ${grayMain};
    }

    input {
        font-family: "Source Sans Pro";
        color: ${grayMain};
    }
`;
