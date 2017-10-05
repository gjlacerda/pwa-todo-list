import styled, {css} from 'styled-components';

const checkboxBg = '#ddd';
const checkboxAtiveBg = '#c3e6cb';

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

    ${props => props.done && css`
        border-color: ${checkboxAtiveBg};
        background: url(src/icons/icon-check.svg) no-repeat center center ${checkboxAtiveBg};
    `}
`;
