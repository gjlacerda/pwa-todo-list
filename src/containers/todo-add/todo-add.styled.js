import styled from 'styled-components';
import {grayLight} from 'styled/colors.styled';
import {ItemLayout} from 'components/todo-item/todo-item.styled';

export const Container = styled.div``;

export const Input = styled.input`
    ${ItemLayout}

    &::placeholder {
        color: ${grayLight};
        font-weight: 500;
    }
`;
