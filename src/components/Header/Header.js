import React from 'react';
import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../image/logo.png'
import { BsFillTelephoneFill, BsCart, BsSearch } from "react-icons/bs";
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <Navbar className="py-3" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="img-fluid" src={logo} alt="Logo" />
                        <span className="text-white fw-bold fs-6 ms-4 header-phone-number"><BsFillTelephoneFill className="text-white" /> 0905-456-987-3</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">
                            <NavLink className="nav-link text-white fw-bold me-4" to="/home">
                                Home</NavLink>
                            <NavLink className="nav-link text-white fw-bold me-4" to="/about">About</NavLink>
                            <NavLink className="nav-link text-white fw-bold me-4" to="/contact">Contact</NavLink>
                            <NavLink className="nav-link text-white fw-bold me-4" to="/allBlogs">Blog</NavLink>
                            <div className="nav-link">

                            </div>
                            <button className="search-icon bg-transparent border-0 me-4"><BsSearch /></button>
                            <button className="cart-icon bg-transparent border-0 me-4"><BsCart /></button>

                            {
                                user.email ? <Dropdown align="end">
                                    <Dropdown.Toggle className="border-0 mt-2 nav-link bg-transparent account-detail" id="dropdown-basic">
                                        <img className="img-fluid p-0" src={user.photoURL} />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="text-center">
                                        <Dropdown.Item>
                                            <img className="img-fluid w-50 rounded-circle" src={user.photoURL} />
                                            <h5 className="pt-3">{user.displayName}</h5>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <NavLink className="text-decoration-none text-dark" to="/myOrder"><h6>My Order</h6></NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <NavLink className="text-decoration-none text-dark" to="/manageAllOrder"><h6>Manage All Order</h6></NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <NavLink className="text-decoration-none text-dark" to="/addNewProduct"><h6>Add New Product</h6></NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <NavLink className="text-decoration-none text-dark" to="/createBlog"><h6>Create a Blog</h6></NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <NavLink className="text-decoration-none text-dark" to="/manageBlog"><h6>Manage Blogs</h6></NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <button onClick={logOut} className="logout-btn border-0 rounded-pill">Log out</button>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                    :
                                    <NavLink className="nav-link text-white fw-bold" to="/login">
                                        <button className="login-button">Login</button>
                                    </NavLink>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;

{/* <button className="border-0 mt-2 nav-link bg-transparent account-detail"><img className="img-fluid p-0" src={user.photoURL} /></button> */ }