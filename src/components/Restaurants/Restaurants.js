import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import res1 from '../../image/restaurant1.jpg'
import res2 from '../../image/restaurant2.jpg'
import res3 from '../../image/restaurant3.jpg'
import res4 from '../../image/restaurant4.jpg'
import res5 from '../../image/restaurant5.jpg'
import './Restaurants.css';

const Restaurants = () => {
    return (
        <div className="mt-5">
            <div className="feature-restaurant text-center">
                <p className="m-0 py-1 fw-bold"><small>Our Recommendations</small></p>
                <h1 className="m-0 fw-bold">Cafes & Restaurants</h1>
            </div>

            <Container className="mt-5">
                <Row>
                    <Col className="large-restaurant-card" md={6}>
                        <Card className="restaurant-card border-0">
                            <Card.Img className="restaurant-img img-fluid" variant="top" src={res1} />
                            <Card.Body className="p-4">
                                <Card.Title><h1 className="fw-bold">Burger House</h1></Card.Title>
                                <Card.Text>
                                    <p className="restaurant-desc m-0 py-1"><FaRegCalendarAlt className="me-2 restaurant-icon" /> Monday - Saturday</p>
                                    <p className="restaurant-desc m-0 "><MdOutlineWatchLater className="me-2 restaurant-icon" /> 09am - 10pm</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col md={6}>
                                <Card className="restaurant-card border-0">
                                    <Card.Img className="img-fluid" variant="top" src={res2} />
                                    <Card.Body className="p-4">
                                        <Card.Title><h4 className="fw-bold">Restaurant Monaco</h4></Card.Title>
                                        <Card.Text>
                                            <p className="restaurant-desc m-0 py-1"><FaRegCalendarAlt className="me-2 restaurant-icon" /> <small>Monday - Saturday</small></p>
                                            <p className="restaurant-desc m-0 "><MdOutlineWatchLater className="me-2 restaurant-icon" /> <small>09am - 10pm</small></p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="restaurant-card border-0">
                                    <Card.Img className="img-fluid" variant="top" src={res3} />
                                    <Card.Body className="p-4">
                                        <Card.Title><h4 className="fw-bold">Ribs and Beer</h4></Card.Title>
                                        <Card.Text>
                                            <p className="restaurant-desc m-0 py-1"><FaRegCalendarAlt className="me-2 restaurant-icon" /> <small>Monday - Saturday</small></p>
                                            <p className="restaurant-desc m-0 "><MdOutlineWatchLater className="me-2 restaurant-icon" /> <small>09am - 10pm</small></p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="pt-4">
                            <Col md={6}>
                                <Card className="restaurant-card border-0">
                                    <Card.Img className="img-fluid" variant="top" src={res4} />
                                    <Card.Body className="p-4">
                                        <Card.Title><h4 className="fw-bold">Sushiteria</h4></Card.Title>
                                        <Card.Text>
                                            <p className="restaurant-desc m-0 py-1"><FaRegCalendarAlt className="me-2 restaurant-icon" /> <small>Monday - Saturday</small></p>
                                            <p className="restaurant-desc m-0 "><MdOutlineWatchLater className="me-2 restaurant-icon" /> <small>09am - 10pm</small></p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="restaurant-card border-0">
                                    <Card.Img className="img-fluid" variant="top" src={res5} />
                                    <Card.Body className="p-4">
                                        <Card.Title><h4 className="fw-bold">Happy Grill Cafe</h4></Card.Title>
                                        <Card.Text>
                                            <p className="restaurant-desc m-0 py-1"><FaRegCalendarAlt className="me-2 restaurant-icon" /> <small>Monday - Saturday</small></p>
                                            <p className="restaurant-desc m-0 "><MdOutlineWatchLater className="me-2 restaurant-icon" /> <small>09am - 10pm</small></p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="text-center my-5">

                <button className="buttons">View more</button>
            </div>
        </div>
    );
};

export default Restaurants;