import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GiHamburger, GiSushis, GiSteak } from "react-icons/gi";
import { FaPizzaSlice, FaMapMarkedAlt } from "react-icons/fa";
import { BsTruck, BsPhone, BsBoxSeam } from "react-icons/bs";
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import './Home.css'
import PopularItems from '../PopularItems/PopularItems';
import Restaurants from '../Restaurants/Restaurants';
import Testimonial from '../Testimonials/Testimonial';
import AboutAppSec from '../AboutAppSec/AboutAppSec';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />

            {/* All categories section */}
            <Container className="all-categories">
                <Row className="gy-3">
                    <Col md={3}>
                        <div className="categories d-flex align-items-center">
                            <div className="categories-icon d-flex align-items-center justify-content-center">
                                <span><GiHamburger className="fs-1" /></span>
                            </div>
                            <span className="ms-3 fw-bold">Fast Food</span>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="categories d-flex align-items-center">
                            <div className="categories-icon d-flex align-items-center justify-content-center">
                                <span><FaPizzaSlice className="fs-1" /></span>
                            </div>
                            <span className="ms-3 fw-bold">Hot Pizza</span>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="categories d-flex align-items-center">
                            <div className="categories-icon d-flex align-items-center justify-content-center">
                                <span><GiSushis className="fs-1" /></span>
                            </div>
                            <span className="ms-3 fw-bold">Asian Food</span>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="categories d-flex align-items-center">
                            <div className="categories-icon d-flex align-items-center justify-content-center">
                                <span><GiSteak className="fs-1" /></span>
                            </div>
                            <span className="ms-3 fw-bold">Raw Meat</span>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Popular items section component */}
            <PopularItems />

            {/* Features Section */}
            <Container fluid className="feature-container">
                <Row>
                    <Col className="p-0" md={6}>
                        <img className="img-fluid" src="http://gomoto.like-themes.com/wp-content/uploads/2019/06/sit-photo.jpg" />
                    </Col>
                    <Col className="p-5" md={6}>
                        <div className="p-5 feature-details">
                            <h1 className="feature-title text-white fw-bold">
                                Sit at Home
                                <br />
                                <span>We Will Take Care</span>
                            </h1>
                            <p className="text-white py-3">Proin ornare posuere quam ut euismod. Nam eu nunc vitae orci ultrices imperdiet ut id ligula.
                                Sed interdum eros eget sagittis rutrum. Vestibulum in elementum mauris. In iaculis odio urna.</p>
                            <Row className="py-4">
                                <Col className="text-center" md={3}>
                                    <p><BsTruck className="feature-icon" /></p>
                                    <p className="text-white feature-detail">Fast Delivery in 1 Hour</p>
                                </Col>
                                <Col className="text-center" md={3}>
                                    <p><BsPhone className="feature-icon" /></p>
                                    <p className="text-white feature-detail">Amazing Mobile App</p>
                                </Col>
                                <Col className="text-center" md={3}>
                                    <p><FaMapMarkedAlt className="feature-icon" /></p>
                                    <p className="text-white feature-detail">Wide Coverage Map</p>
                                </Col>
                                <Col className="text-center" md={3}>
                                    <p><BsBoxSeam className="feature-icon" /></p>
                                    <p className="text-white feature-detail">More Than 150 Couriers</p>
                                </Col>
                            </Row>
                            <button className="buttons mt-4">Read more</button>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Restaurant section component */}
            <Restaurants />

            {/* Pizza offer section */}
            <Container fluid className="pizza-offer py-5">
                <Row className="py-5">
                    <Col className="p-5" md={5}>
                        <div className="ps-4">
                            <h1 className="fw-bold text-white pizza-offer-title">
                                Always
                                <br />
                                <span>the Hottest Pizza</span>
                            </h1>
                            <p className="py-3">Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
                            <button className="pizza-offer-btn border-0 text-white mt-3">Get Pizza</button>
                        </div>

                    </Col>
                    <Col md={7}>
                        <img className="img-fluid" src="http://gomoto.like-themes.com/wp-content/uploads/2019/06/pizza-1024x688.png" />
                    </Col>
                </Row>
            </Container>

            {/* Testimonials section component */}
            <Testimonial />

            {/* About app section component */}
            <AboutAppSec />

            {/* Blogs section component */}
            <Blogs />

            {/* Footer section component */}
            <Footer />
        </div>
    );
};

export default Home;