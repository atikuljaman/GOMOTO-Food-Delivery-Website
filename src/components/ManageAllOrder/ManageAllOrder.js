import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './ManageAllOrder.css'

const ManageAllOrder = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://shrieking-witch-03472.herokuapp.com/placedOrder')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [allOrders]);


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
    };

    const updateApprove = allOrders.find(approve => approve.status = 'Approved');

    const handleApprove = id => {

        fetch(`https://shrieking-witch-03472.herokuapp.com/placedOrder/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateApprove)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    alert('Order has been Approved')
                }
            })

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
                                allOrders.map(allOrder => (

                                    <tr>
                                        <td>{allOrder?.name}</td>
                                        <td>{allOrder?.email}</td>
                                        <td>{allOrder?.Address}</td>
                                        <td>{allOrder?.orders?.name}</td>
                                        <td>${allOrder?.orders?.price.toFixed(2)}</td>
                                        <td>{allOrder?.status}</td>
                                        <td className="text-center">
                                            <button onClick={() => handleDelete(allOrder?._id)} className="border-0 btn btn-danger">Remove</button>
                                            <button onClick={() => handleApprove(allOrder?._id)} className="border-0 btn btn-success ms-3">Approve</button>
                                        </td>
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

export default ManageAllOrder;