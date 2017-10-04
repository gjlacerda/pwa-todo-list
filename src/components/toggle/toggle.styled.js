import styled, {css} from 'styled-components';

const checkboxBg = '#ddd';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Checkbox = styled.span`
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid ${checkboxBg};
    cursor: pointer;
     
    ${props => props.active && css`
        background-color: ${checkboxBg};
    `}
`;