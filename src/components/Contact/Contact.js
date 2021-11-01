import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import './Contact.css';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <Header />
            <div className="allblog-heading d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-white">Contact Us</h1>
                <p>Eat Food <span>|</span> Read Blogs <span>|</span> Enjoy Life.</p>
            </div>

            <Container>
                <Row>
                    <Col md={4}>
                    </Col>
                    <Col md={4}>
                    </Col>
                    <Col md={4}>
                    </Col>
                    <Col md={4}>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
};

export default Contact;