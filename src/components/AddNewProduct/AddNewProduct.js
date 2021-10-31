import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './AddNewProduct.css'

const AddNewProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://shrieking-witch-03472.herokuapp.com/foods', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log(res.body);
            })
        /* .then(data => console.log(data)) */
    };

    return (
        <div>
            <Header />

            <Container className="my-5">
                <Row>
                    <Col className="d-flex justify-content-center">
                        <div className="w-50">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Product title" className="py-3 ps-4 mt-3 w-100" {...register("name")} />
                                <br />
                                <input placeholder="Price" className="py-3 ps-4 mt-3 w-100" type="number" {...register("price", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}
                                <br />
                                <input placeholder="Rating" type="number" className="py-3 ps-4 mt-3 w-100" {...register("rating", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}
                                <br />
                                <textarea placeholder="Description" className="py-3 ps-4 mt-3 w-100" {...register("desc", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}
                                <br />
                                <input placeholder="Product image" className="py-3 ps-4 mt-3 w-100" {...register("img", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}
                                <br />
                                <select className="py-3 mt-3 ps-4 w-100" {...register("ctg")}>
                                    <option value="Burger">Burger</option>
                                    <option value="Pizza">Pizza</option>
                                    <option value="Asian Food">Asian Food</option>
                                    <option value="Raw Meat">Raw Meat</option>
                                </select>
                                {errors.exampleRequired && <span>This field is required</span>}
                                <br />
                                <input className="py-3 mt-3 w-100 border-0 add-product-btn" type="submit" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
};

export default AddNewProduct;