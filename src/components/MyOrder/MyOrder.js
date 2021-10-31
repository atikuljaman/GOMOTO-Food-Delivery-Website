import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MyOrder.css'

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://shrieking-witch-03472.herokuapp.com/placedOrder')
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [myOrders]);

    const myAllOrder = myOrders.filter(myOrder => myOrder.email === user.email);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`https://shrieking-witch-03472.herokuapp.com/placedOrder/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert('Successfully deleted item.');
                    }
                })
        }
    }
    return (
        <div>
            <Header />

            <div className="py-5">
                <Container className="my-5 my-order">
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Remove Item</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myAllOrder.map(myOrder => (

                                    <tr>
                                        <td>{myOrder?.name}</td>
                                        <td>{myOrder?.email}</td>
                                        <td>{myOrder?.Address}</td>
                                        <td>{myOrder?.orders?.name}</td>
                                        <td>${myOrder?.orders?.price.toFixed(2)}</td>
                                        <td>{myOrder?.status}</td>
                                        <td className="text-center"><button onClick={() => handleDelete(myOrder?._id)} className="border-0 btn btn-danger">Remove</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Container>
            </div>

            <Footer />
        </div>
    );
};

export default MyOrder;