import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export class HomePage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <header>
                            <div>Header</div>
                        </header>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <section>
                            <div>Content</div>
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <footer>
                            <div>Footer</div>
                        </footer>
                    </Col>
                </Row>
            </Container>
        );
    }
}
