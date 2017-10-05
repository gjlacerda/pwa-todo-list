import React from 'react';
import {Container} from './remove.styled';

const Remove = ({onClick}) => (
    <Container onClick={() => onClick()}>
        &times;
    </Container>
);

export default Remove;
