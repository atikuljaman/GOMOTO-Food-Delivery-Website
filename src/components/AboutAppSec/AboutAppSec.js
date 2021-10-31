import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { GoMailRead } from "react-icons/go";
import aboutAppImg from '../../image/about-app.png'
import './AboutAppSec.css'

const AboutAppSec = () => {
    return (
        <div className="about-app-sec pt-5">
            <Container fluid className="about-app-section px-5 pt-5">
                <Row className="pt-3">
                    <Col md={6}>
                        <div className="p-3">
                            <h1 className="fw-bold about-app-title">Get More With <span>Our Application</span></h1>
                            <p className="about-app-desc py-3">Nunc pellentesque orci sed tempor pharetra. Morbi molestie purus in interdum facilisis.
                                Mauris commodo mi a egestas sollicitudin. Mauris pharetra placerat sem vel fringilla.
                            </p>

                            <div className="px-3 app-features">
                                <div className="d-flex align-items-center mt-3">
                                    <div className="about-app-feature d-flex align-items-center justify-content-center text-white fw-bold rounded-circle">
                                        <small>01</small>
                                    </div>
                                    <p className="fw-bold ms-3 m-0">Follow Delivery Status</p>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="about-app-feature d-flex align-items-center justify-content-center text-white fw-bold rounded-circle">
                                        <small>02</small>
                                    </div>
                                    <p className="fw-bold ms-3 m-0">Order From Any Location</p>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="about-app-feature d-flex align-items-center justify-content-center text-white fw-bold rounded-circle">
                                        <small>03</small>
                                    </div>
                                    <p className="fw-bold ms-3 m-0">Get Important Notices</p>
                                </div>
                            </div>

                            <div className="mt-5 app-store-images">
                                <img className="img-fluid app-store-img me-3" src="http://gomoto.like-themes.com/wp-content/uploads/2020/04/app-1.png" />
                                <img className="img-fluid app-store-img" src="http://gomoto.like-themes.com/wp-content/uploads/2020/04/app-2-140x47.png" />
                            </div>
                        </div>
                    </Col>
                    <Col className="about-app-banner" md={6}>
                        <img className="img-fluid" src={aboutAppImg} />
                    </Col>
                </Row>
            </Container>

            <Container fluid className="subscribe-newsletter py-5">
                <Row className="newsletter-row">
                    <Col md={6}>
                        <div className="newsletter-desc d-flex align-items-center">
                            <h1><GoMailRead /></h1>
                            <div className="newsletter-details">
                                <p className="m-0 fw-bold text-white"><small>Get the latest news and offers</small></p>
                                <h2 className="m-0 fw-bold">Subscribe to our newsletter</h2>
                            </div>
                        </div>
                    </Col>
                    <Col className="pt-4" md={6}>
                        <div className="subscribe-field">
                            <InputGroup className="mb-3 w-75">
                                <FormControl
                                    placeholder="Your email. . ."
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    className="py-3 ps-4 rounded-pill"
                                />
                            </InputGroup>
                            <button className="border-0 rounded-pill subscribe-btn text-white fw-bold" id="button-addon2">
                                Subscribe
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutAppSec;