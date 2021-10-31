import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './PlaceOrder.css';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { id } = useParams();
    const [food, setFood] = useState({})
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://shrieking-witch-03472.herokuapp.com/foods/${id}`)
            .then(res => res.json())
            .then(data => setFood(data))
    }, []);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.orders = food;
        data.status = 'pending';

        fetch('https://shrieking-witch-03472.herokuapp.com/placedOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Successfully Order Placed');
                    reset();
                }
            })

    };

    return (
        <div>
            <Header />

            <Container className="my-5">
                <Row>
                    <Col md={6}>
                        <div className="text-center">
                            <img className="img-fluid" src={food?.img} />
                            <p className="">
                                <Rating
                                    className="single-food-rating-icon me-1"
                                    initialRating={food.rating}
                                    readonly
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                />

                                <small>({food?.rating})</small>
                            </p>
                            <h5>{food?.name}</h5>
                            <h6 className="py-3">${food?.price?.toFixed(2)}</h6>
                            <p className="single-food-desc"><small>{food?.desc}</small></p>
                        </div>
                    </Col>
                    <Col className="pt-5" md={6}>
                        <div className="w-100">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Name" className="py-3 ps-4 mt-4 w-100" defaultValue={user?.displayName} {...register("name")} />
                                <br />
                                <input placeholder="Email" className="py-3 ps-4 mt-4 w-100" defaultValue={user?.email} {...register("email", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}
                                <br />
                                <input placeholder="Address" className="py-3 ps-4 mt-4 w-100" {...register("Address", { required: true })} />
                                <br />
                                <input placeholder="Phone" type="number" className="py-3 ps-4 mt-4 w-100" {...register("Phone", { required: true })} />
                                <br />
                                <button className="py-3 border-0 form-submit-btn mt-4 w-100" type="submit">Place Order</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
};

export default PlaceOrder;