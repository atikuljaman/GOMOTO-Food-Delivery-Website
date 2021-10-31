import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
import useLoading from '../../../hooks/useLoading';
import './Burger.css'

const Burger = () => {
    const [foods, setFoods] = useState([]);
    const { setIsLoading, isLoading } = useLoading();

    useEffect(() => {
        setIsLoading(true)
        fetch('https://shrieking-witch-03472.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
            .finally(() => setIsLoading(false))
    }, []);

    const burgers = foods.filter(fd => fd.ctg === 'Burger');

    if (isLoading) {
        return (
            <h1><Spinner animation="border" variant="warning" /></h1>
        )
    }

    console.log(isLoading);
    return (
        <div>
            <Container>
                <Row>
                    {
                        burgers.map(burger => (
                            <Col md={3}>
                                <Card key={burger._id} className="border-0">
                                    <Card.Img className="card-img" variant="top" src={burger.img} />
                                    <Card.Body>
                                        <Card.Title><h6 className="fw-bold">{burger.name}</h6></Card.Title>
                                        <Card.Text>
                                            <p className="card-desc py-1 m-0"><small>{burger.desc.slice(0, 50)}</small></p>
                                            <Rating
                                                className="product-rating"
                                                initialRating={burger.rating}
                                                readonly
                                                emptySymbol="far fa-star"
                                                fullSymbol="fas fa-star"
                                            />
                                            <p className="fw-bold py-2">${burger.price}</p>
                                        </Card.Text>
                                        <NavLink to={`/placeOrder/${burger._id}`}>
                                            <button className="card-btn border-0"><small>Buy Now</small></button>
                                        </NavLink>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Burger;