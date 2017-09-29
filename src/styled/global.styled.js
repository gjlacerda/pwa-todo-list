import {injectGlobal} from 'styled-components';
import {grayMain} from './colors.styled';

injectGlobal`
    @import url(https://fonts.googleapis.com/css?family=Roboto:500,700);
    
    html, 
    body,
    #root {
        height: 100%;    
    }
    
    body {
        font-family: Roboto;
        box-sizing: border-box;
        font-weight: 500;
        background: linear-gradient(-20deg, #d0b782 20%, #a0cecf 80%);
        font-size: 20px;
        color: ${grayMain};
    }
    
    input {
        font-family: Roboto;
        box-sizing: border-box;
        color: ${grayMain};    
    }
`;