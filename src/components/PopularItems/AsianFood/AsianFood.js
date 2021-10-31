import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
import useLoading from '../../../hooks/useLoading';

const AsianFood = () => {
    const [foods, setFoods] = useState([]);
    const { setIsLoading, isLoading } = useLoading();

    useEffect(() => {
        setIsLoading(true)
        fetch('https://shrieking-witch-03472.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
            .finally(() => setIsLoading(false))
    }, []);

    const asianFoods = foods.filter(food => food.ctg === 'Asian Food');

    if (isLoading) {
        return (
            <h1><Spinner animation="border" variant="warning" /></h1>
        )
    }
    return (
        <div>
            <Container>
                <Row>
                    {
                        asianFoods.map(asianFood => (
                            <Col md={3}>
                                <Card className="border-0">
                                    <Card.Img className="card-img" variant="top" src={asianFood.img} />
                                    <Card.Body>
                                        <Card.Title><h6 className="fw-bold">{asianFood.name}</h6></Card.Title>
                                        <Card.Text>
                                            <p className="card-desc py-1 m-0"><small>{asianFood.desc.slice(0, 50)}</small></p>
                                            <Rating
                                                className="product-rating"
                                                initialRating={asianFood.rating}
                                                readonly
                                                emptySymbol="far fa-star"
                                                fullSymbol="fas fa-star"
                                            />
                                            <p className="fw-bold py-2">${asianFood?.price}</p>
                                        </Card.Text>
                                        <NavLink to={`/placeOrder/${asianFood?._id}`}>
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

export default AsianFood;