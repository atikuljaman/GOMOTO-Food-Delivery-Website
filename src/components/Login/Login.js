import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { FaFacebookF, FaTwitter, FaGofore } from "react-icons/fa";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import logo from '../../image/logo.png'
import './Login.css';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/home';

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirectUri)
            })
    }

    return (
        <div>
            <Header />

            <div className="login-form d-flex justify-content-center align-items-center">
                <Container className="login">
                    <Row>
                        <Col className="login-form-left p-5" md={5}>
                            <div>
                                <img className="login-form-logo" src={logo} />
                                <p className="text-white py-4">Login using social media to get quick access</p>
                                <div>
                                    <button className="text-white facebook-btn border-0">
                                        <FaFacebookF /> <small>Signin with facebook</small>
                                    </button>
                                    <button className="text-white twitter-btn border-0 mt-3">
                                        <FaTwitter /> <small>Signin with twitter</small>
                                    </button>
                                    <button onClick={handleGoogleSignIn} className="text-white google-btn border-0 mt-3">
                                        <FaGofore /> <small>Signin with google</small>
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col className="login-form-right text-center px-4 pt-5" md={7}>
                            <h4 className="fw-bold">Login to your account</h4>
                            <p>Don’t have an account? <button className="border-0 bg-transparent signup-toggle-btn"><small>Sign Up Free!</small></button></p>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input className="w-100 py-2 ps-3" placeholder="Email" {...register("email")} />
                                <br />

                                <input className="w-100 py-2 ps-3 mt-4" placeholder="Password" {...register("password", { required: true })} />

                                {errors.exampleRequired && <span>This field is required</span>}
                                <br />
                                <div className="text-end pt-3">
                                    <button className="border-0 bg-transparent forgot-btn">Forgot Password?</button>
                                </div>
                                <input className="mt-4 w-100 py-2 submit-btn border-0" type="submit" />
                            </form>
                        </Col>
                    </Row>
                </Container>

            </div>
            <Footer />
        </div>
    );
};

export default Login;

