import {injectGlobal} from 'styled-components';
import {grayMain} from './colors.styled';

injectGlobal`
    @import url(https://fonts.googleapis.com/css?family=Roboto:400);

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
        font-family: Roboto;
        font-weight: 400;
        box-sizing: border-box;
        font-weight: 500;
        background: linear-gradient(-20deg, #d0b782 20%, #a0cecf 80%);
        font-size: 20px;
        color: ${grayMain};
    }

    input {
        font-family: Roboto;
        color: ${grayMain};
    }
`;
