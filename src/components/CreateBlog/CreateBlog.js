import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import './CreateBlog.css';
import { useForm } from 'react-hook-form';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const CreateBlog = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.status = 'Pending'
        fetch('https://shrieking-witch-03472.herokuapp.com/blogs', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Successfully Blog Created');
                    reset();
                }
            })
    };

    return (
        <div>
            <Header />

            <div className="create-blog-container">
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center align-items-center create-blog-col">
                            <div className="w-50 create-blog-form p-5">
                                <h4 className="text-center text-white">Create a Blog</h4>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input placeholder="Your Name" className="rounded-pill border-0 py-3 ps-4 mt-4 w-100" defaultValue={user?.displayName} {...register("username")} />
                                    <br />
                                    <input placeholder="Email" className="rounded-pill border-0 py-3 ps-4 mt-4 w-100" defaultValue={user?.email} {...register("email", { required: true })} />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    <br />
                                    <input placeholder="Blog Title" className="rounded-pill border-0 py-3 ps-4 mt-4 w-100" {...register("name", { required: true })} />
                                    <br />
                                    <input placeholder="Blog Description" className="rounded-pill border-0 py-3 ps-4 mt-4 w-100" {...register("desc", { required: true })} />
                                    <br />
                                    <input placeholder="Enter Image Url" className="rounded-pill border-0 py-3 ps-4 mt-4 w-100" {...register("img", { required: true })} />
                                    <br />
                                    <select className="rounded-pill border-0 py-3 px-4 mt-4 w-100" {...register("ctg")}>
                                        <option value="Food Delivery">Food Delivery</option>
                                        <option value="Medical">Medical</option>
                                        <option value="GOMOTO">GOMOTO</option>
                                    </select>
                                    <input type="date" className="rounded-pill border-0 py-3 px-4 mt-4 w-100" {...register("date", { required: true })} />
                                    <br />
                                    <button className="rounded-pill py-3 border-0 form-submit-btn my-4 w-100" type="submit">Create Blog</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    );
};

export default CreateBlog;