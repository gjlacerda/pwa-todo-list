import styled from 'styled-components';
import {grayLight} from 'styled/colors.styled';

export const Container = styled.div`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
    outline: none;
    height: 50px;
    padding: 0 15px;
    border: none;
    width: 100%;
    
    &::placeholder {
        color: ${grayLight};
    }
`;