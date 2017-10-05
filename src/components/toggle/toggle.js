import React from 'react';
import {Container, Checkbox} from './toggle.styled';

const Toggle = ({done, onClick}) => (
    <Container>
        <Checkbox onClick={() => onClick()}
                  done={done}/>
    </Container>
);

export default Toggle;
