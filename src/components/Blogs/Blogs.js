import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCalendarAlt, FaEye, FaCommentDots } from "react-icons/fa";
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className="text-center blogs-heading">
                <p className="m-0 fw-bold py-1"><small>Blogs</small></p>
                <h1 className="m-0 fw-bold">Recent Articles</h1>
            </div>

            <Container className="pt-5">
                <Row>
                    <Col md={6}>
                        <Card className="border-0 blog-card">
                            <Card.Img variant="top" className="img-fluid blog-img" src="http://gomoto.like-themes.com/wp-content/uploads/2019/06/blog_01-1-755x470.jpg" />
                            <Card.Body className="px-0">
                                <button className="blog-btn border-0 text-white fw-bold mb-3">Food Delivery</button>
                                <Card.Title>
                                    <h3 className="fw-bold">All City Cafes and Restaurants Switched to Delivery Mode</h3>
                                </Card.Title>
                                <Card.Text>
                                    <p className="pt-2 pb-3 blog-desc"><small>Morbi volutpat nisi a ligula vestibulum placerat.
                                        Suspendisse venenatis pulvinar nibh sed convallis.
                                        Cras elementum nunc a purus sodales tincidunt.
                                        Duis fringilla quam at tellus …</small></p>
                                    <div className="d-flex blog-publish">
                                        <p className=""><FaCalendarAlt className="blog-icon" /> <small>December 9, 2019</small></p>
                                        <p className="ms-5"><FaCommentDots className="blog-icon" /> <small>11</small></p>
                                        <p className="ms-5"><FaEye className="blog-icon" /> <small>1340</small></p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="px-4" md={6}>
                        <Row className="side-card">
                            <Col className="p-0" md={4}>
                                <img className="img-fluid h-100 side-blog-img" src="http://gomoto.like-themes.com/wp-content/uploads/2019/06/blog_02-2-530x414.jpg" />
                            </Col>
                            <Col md={8}>
                                <Card.Body className="px-0">
                                    <button className="blog-btn border-0 text-white fw-bold mb-3">Food Delivery</button>
                                    <Card.Title>
                                        <h5 className="fw-bold">Creative Packaging as a Successful Marketing Move</h5>
                                    </Card.Title>
                                    <Card.Text>
                                        <div className="d-flex blog-publish">
                                            <p className=""><FaCalendarAlt className="blog-icon" /> <small>December 9, 2019</small></p>
                                            <p className="ms-5"><FaCommentDots className="blog-icon" /> <small>11</small></p>
                                            <p className="ms-5"><FaEye className="blog-icon" /> <small>1340</small></p>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                        <Row className="side-card mt-4">
                            <Col className="p-0" md={4}>
                                <img className="img-fluid h-100 side-blog-img" src="http://gomoto.like-themes.com/wp-content/uploads/2019/06/blog_03-2-530x414.jpg" />
                            </Col>
                            <Col md={8}>
                                <Card.Body className="px-0">
                                    <button className="blog-btn border-0 text-white fw-bold mb-3">Food Delivery</button>
                                    <Card.Title>
                                        <h5 className="fw-bold">Modern Food Delivery Services Overview</h5>
                                    </Card.Title>
                                    <Card.Text>
                                        <div className="d-flex blog-publish">
                                            <p className=""><FaCalendarAlt className="blog-icon" /> <small>December 9, 2019</small></p>
                                            <p className="ms-5"><FaCommentDots className="blog-icon" /> <small>11</small></p>
                                            <p className="ms-5"><FaEye className="blog-icon" /> <small>1340</small></p>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                        <Row className="side-card mt-4">
                            <Col className="p-0" md={4}>
                                <img className="img-fluid h-100 side-blog-img" src="http://gomoto.like-themes.com/wp-content/uploads/2019/06/blog_04-2-530x414.jpg" />
                            </Col>
                            <Col md={8}>
                                <Card.Body className="px-0">
                                    <button className="blog-btn border-0 text-white fw-bold mb-3">Food Delivery</button>
                                    <Card.Title>
                                        <h5 className="fw-bold">Bottled Water Home Delivery Companies</h5>
                                    </Card.Title>
                                    <Card.Text>
                                        <div className="d-flex blog-publish">
                                            <p className=""><FaCalendarAlt className="blog-icon" /> <small>December 9, 2019</small></p>
                                            <p className="ms-5"><FaCommentDots className="blog-icon" /> <small>11</small></p>
                                            <p className="ms-5"><FaEye className="blog-icon" /> <small>1340</small></p>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <div className="text-center mt-3">
                    <button className="buttons">Read More</button>
                </div>
            </Container>
        </div>
    );
};

export default Blogs;