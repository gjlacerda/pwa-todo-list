import React from 'react';
import {Container, Checkbox} from './toggle.styled';

const Toggle = ({active, onClick}) => (
    <Container>
        <Checkbox onClick={() => onClick()}
                  active={active}/>
    </Container>
);

export default Toggle;