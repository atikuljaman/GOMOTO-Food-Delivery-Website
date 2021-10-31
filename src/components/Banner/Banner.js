import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner from '../../image/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Container className="">
                <Row className="d-flex justify-content-center align-items-center banner-container pt-4">
                    <Col md={5}>
                        <div className="w-100">
                            <h1 className="text-white banner-heading fw-bold">Express <br /> <span>Home Delivery</span></h1>
                            <p className="text-white pt-2 pb-3 banner-desc">Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
                            <button className="buttons">Read more</button>
                        </div>
                    </Col>
                    <Col className="mt-2" md={7}>
                        <img className="img-fluid banner-img" src={banner} alt="Banner Image" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;