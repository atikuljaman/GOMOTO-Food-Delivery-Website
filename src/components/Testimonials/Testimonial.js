import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaQuoteLeft } from "react-icons/fa";
import './Testimonial.css';

const Testimonial = () => {

    return (
        <div className="my-5">
            <div className="text-center testimonial-heading">
                <p className="m-0 fw-bold py-1"><small>Testimonials</small></p>
                <h1 className="m-0 fw-bold">Why Our Clients Choose Us</h1>
            </div>

            <Container className="pt-4">
                <Row>
                    <Col className="d-flex justify-content-center">
                        <div className="w-50 text-center testimonials">
                            <h2 className="blog-quote-icon mb-4"><FaQuoteLeft /></h2>
                            <p> Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat.
                                Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus.
                                Morbi viverra volutpat ex, id pellentesque felis volutpat eu.
                                Etiam mattis laoreet leo sed accumsan. Fusce tincidunt in leo lacinia condimentum..
                            </p>
                            <div>
                                <div className="">
                                    <img className="img-fluid testimonial-img rounded-circle mt-4" src="http://gomoto.like-themes.com/wp-content/uploads/2019/06/client-16-100x100.jpg" />
                                    <p className="fw-bold m-0 pt-2">Patric Stone</p>
                                    <p className="m-0 fw-bold testimonial-job"><small>Freelancer</small></p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Testimonial;