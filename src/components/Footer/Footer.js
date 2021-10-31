import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsTelephoneFill } from "react-icons/bs";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from '../../image/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <Container fluid className="footer py-5">
                <Row className="pt-4">
                    <Col className="d-flex justify-content-center">
                        <div className="footer-top">
                            <Row className="g-0">
                                <Col className="footer-top-left" md={6}>
                                    <img className="img-fluid footer-top-left-img" src="http://gomoto.like-themes.com/wp-content/uploads/2019/06/footer-banner.jpg" />
                                </Col>
                                <Col className="footer-top-right text-center pt-4" md={6}>
                                    <p className="m-0 fw-bold pt-2"><small>Call us to make order now.</small></p>
                                    <h3 className="m-0 fw-bold">90-500-28-999</h3>
                                </Col>
                            </Row>
                            <div className="footer-top-icon">
                                <h2><BsTelephoneFill className="footer-top-call-icon" /></h2>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="">
                    <Col className="d-flex footer-centered justify-content-center">
                        <div className="footer-center text-center my-5">
                            <img className="img-fluid w-25 pb-3" src={logo} />
                            <p><small>Etiam consequat sem ullamcorper, euismod metus sit amet,
                                tristique justo. Vestibulum mattis, nisi ut faucibus commodo,
                                risus ex commodo.</small></p>

                            <div className="footer-social-icons">
                                <span className="mx-3"><FaTwitter /></span>
                                <span className="mx-3"><FaFacebookF /></span>
                                <span className="mx-3"><FaInstagram /></span>
                                <span className="mx-3"><FaYoutube /></span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="text-center py-4">
                    <p className="text-white footer-copy-right-text"><small>© All Rights Reserved - 2020 - <span>Atikul Jaman</span></small></p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;