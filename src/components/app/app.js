import React from 'react';
import Todo from 'components/todo/todo';
import Alert from 'components/alert/alert';
import {
    Container,
    AlertContainer
} from './app.styled';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            showAlert: !navigator.onLine
        };
    }

    componentDidMount() {
        window.addEventListener('online', () => {
            console.log('online');
            this.setState({
                showAlert: false
            });
        });

        window.addEventListener('offline', () => {
            console.log('offline');
            this.setState({
                showAlert: true
            });
        });
    }

    render() {
        return (
            <Container>
                <AlertContainer>
                    { this.state.showAlert &&
                        <Alert>
                            You are offline. Your changes will sync when you have a connection.
                        </Alert>}
                </AlertContainer>
                <Todo/>
            </Container>
        );
    }
}

export default App;
