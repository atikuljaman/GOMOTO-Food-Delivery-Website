import React, { useEffect, useState } from 'react';
import { Card, Col, Container, FormControl, InputGroup, Row, Spinner } from 'react-bootstrap';
import { BiChevronRight } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { FaCalendarAlt, FaCommentDots, FaEye } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import useLoading from '../../../hooks/useLoading';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import smallLogo from '../../../image/s-logo.png';
import blogSideImg from '../../../image/blogs/blog-side.jpg';
import gallery1 from '../../../image/blogs/sidebar-gallery1.jpg';
import gallery2 from '../../../image/blogs/sidebar-gallery2.jpg';
import gallery3 from '../../../image/blogs/sidebar-gallery3.jpg';
import gallery4 from '../../../image/blogs/sidebar-gallery4.jpg';
import gallery5 from '../../../image/blogs/sidebar-gallery5.jpg';
import gallery6 from '../../../image/blogs/sidebar-gallery6.jpg';

const FoodDelivery = () => {
    const [blogs, setBlogs] = useState([]);
    const { isLoading, setIsLoading } = useLoading();

    useEffect(() => {
        setIsLoading(true)
        fetch('https://shrieking-witch-03472.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .finally(() => setIsLoading(false))
    }, []);

    const foodDeliveries = blogs.filter(delivery => delivery.ctg === 'Food Delivery');
    const Medicals = blogs.filter(Medical => Medical.ctg === 'Medical');
    const GOMOTOS = blogs.filter(gomoto => gomoto.ctg === 'GOMOTO');

    if (isLoading) {
        return (
            <div className="d-flex spinner-container justify-content-center align-items-center">
                <h1><Spinner animation="border" variant="warning" /></h1>
            </div>
        )
    }


    const foodDeliveryApprovedBlogs = foodDeliveries.filter(foodDeliveryBlog => foodDeliveryBlog.status === 'Approved');
    const medicalApprovedBlogs = Medicals.filter(medicalAPprovedBlog => medicalAPprovedBlog.status === 'Approved');
    const gomotoApprovedBlogs = GOMOTOS.filter(gomotoApprovedBlog => gomotoApprovedBlog.status === 'Approved');

    return (
        <div>
            <Header />

            <div className="allblog-heading d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-white">Food Delivery Blogs</h1>
                <p>Eat Food <span>|</span> Read Blogs <span>|</span> Enjoy Life.</p>
            </div>

            <Container className="p-5">

                <Row className="gy-5 pt-5">
                    <Col className="px-5" md={9}>
                        {
                            foodDeliveryApprovedBlogs.map(foodDelivery => (
                                <Col className="mb-5">
                                    <Card className="border-0 blog-card">
                                        <Card.Img variant="top" className="img-fluid blog-img" src={foodDelivery?.img} />
                                        <Card.Body className="px-0">
                                            <button className="blog-btn border-0 text-white fw-bold mb-3">{foodDelivery?.ctg}</button>
                                            <Card.Title>
                                                <h3 className="fw-bold">{foodDelivery?.name}</h3>
                                            </Card.Title>
                                            <Card.Text>
                                                <p className="pt-2 pb-3 blog-desc"><small>{foodDelivery?.desc}</small></p>
                                                <div className="d-flex blog-publish">
                                                    <p className=""><FaCalendarAlt className="blog-icon" /> <small>{foodDelivery?.date}</small></p>
                                                    <p className="ms-5"><FaCommentDots className="blog-icon" /> <small>11</small></p>
                                                    <p className="ms-5"><FaEye className="blog-icon" /> <small>1340</small></p>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            ))
                        }
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col>
                                <div className="search-field d-flex align-items-center justify-content-center">
                                    <InputGroup className="w-75 d-flex align-items-center justify-content-center rounded-pill bg-white py-1 pe-1 ps-4">
                                        <FormControl
                                            className="border-0 bg-white me-1 search-input-field h-25"
                                            placeholder="Search"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                        />
                                        <button className="rounded-circle d-flex align-items-center justify-content-center search-btn border-0">
                                            <small><BsSearch className="fw-bold" /></small>
                                        </button>
                                    </InputGroup>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col>
                                <div className="blog-categories px-4 py-3">
                                    <h6 className="text-uppercase d-flex align-items-center py-2">
                                        <img className="img-fluid me-1" src={smallLogo} />
                                        Categories
                                    </h6>
                                    <div>
                                        <NavLink className="d-block" to="/foodDeliveryBlogs">
                                            <button className="border-0 bg-transparent category-btn"><BiChevronRight className="category-icon" />
                                                <small>Food Delivery (<small>{foodDeliveryApprovedBlogs.length})</small></small>
                                            </button>
                                        </NavLink>
                                        <NavLink className="d-block" to="/medicalBlogs">
                                            <button className="border-0 bg-transparent category-btn"><BiChevronRight className="category-icon" />
                                                <small>Medical (<small>{medicalApprovedBlogs.length})</small></small>
                                            </button>
                                        </NavLink>
                                        <NavLink className="d-block" to="">
                                            <button className="border-0 bg-transparent category-btn"><BiChevronRight className="category-icon" />
                                                <small>GOMOTO (<small>{gomotoApprovedBlogs.length})</small></small>
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col>
                                <div className="blog-categories px-4 py-3">
                                    <h6 className="text-uppercase d-flex align-items-center py-2">
                                        <img className="img-fluid me-1" src={smallLogo} />
                                        About Us
                                    </h6>
                                    <div className="pt-3">
                                        <img className="img-fluid blog-sidebar-img" src={blogSideImg} />
                                        <p className="pt-3 pb-2 blog-sidebar-desc">
                                            <small>In quis convallis lacus, id feugiat massa. Praesent id facilisis eros. Mauris bibendum iaculis nisi quis sollicitudin.</small>
                                        </p>
                                        <NavLink className="d-block mb-3" to="">
                                            <button className="border-0 blog-sidebar-btn rounded-pill">
                                                <small>Read More</small>
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col>
                                <div className="blog-categories px-4 py-3">
                                    <h6 className="text-uppercase d-flex align-items-center py-2">
                                        <img className="img-fluid me-1" src={smallLogo} />
                                        Gallery
                                    </h6>
                                    <div className="pt-3">
                                        <Row>
                                            <Col className="p-2" md={4}>
                                                <img className="img-fluid gallery-img" src={gallery1} />
                                            </Col>
                                            <Col className="p-2" md={4}>
                                                <img className="img-fluid gallery-img" src={gallery2} />
                                            </Col>
                                            <Col className="p-2" md={4}>
                                                <img className="img-fluid gallery-img" src={gallery3} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="p-2" md={4}>
                                                <img className="img-fluid gallery-img" src={gallery4} />
                                            </Col>
                                            <Col className="p-2" md={4}>
                                                <img className="img-fluid gallery-img" src={gallery5} />
                                            </Col>
                                            <Col className="p-2" md={4}>
                                                <img className="img-fluid gallery-img" src={gallery6} />
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default FoodDelivery;