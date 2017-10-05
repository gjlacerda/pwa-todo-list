import styled, {css} from 'styled-components';

export const ItemLayout = `
    display: flex;
    align-items: center;
    outline: none;
    min-height: 50px;
    padding: 15px;
    border: none;
    width: 100%;
    box-sizing: border-box;
`;

export const Container = styled.div`
    ${ItemLayout}
    word-wrap: break-word;
`;

export const Text = styled.span`
    display: inline-block;
    margin-left: 12px;
    width: calc(100% - 37px);

    ${props => props.done && css`
        text-decoration: line-through;
    `}
`;

export const LeftContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;
