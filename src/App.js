import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabletop from 'tabletop';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            users: [],
            error: null
        }
    }

    async componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            users: data,
            isLoading: false,
        })
        console.log(data);
    }

    render() {
        const { isLoading, users, error } = this.state

        if (isLoading) {
            return(
                <div className="loader_container">
                    <div className="text-center">
                        <div className="loader"></div>
                        <h6 className="pt-3">Loading...</h6>
                    </div>
                </div>)
        }

        return (
            <div className="App">
                <Navbar expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                </Navbar>

                <Container className="pt-5">
                    <Row>
                        {users.map(user =>
                            <Col md={3} className="mt-4">
                            <Card key={user.id} bg="light" style={{ width: '18rem' }}>
                                <Card.Header>{user.name}</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Username: {user.username}
                                        <p>Email: {user.email}</p>
                                        <p>Address: {user.address.street}</p>
                                        <div>
                                            Website :
                                            <a href="{user.website}" target="_blank">
                                                {user.website}
                                            </a>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
