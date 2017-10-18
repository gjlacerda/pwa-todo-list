import React from 'react';
import {Container} from './alert.styled';

class Alert extends React.Component {
    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        );
    }
}

export default Alert;