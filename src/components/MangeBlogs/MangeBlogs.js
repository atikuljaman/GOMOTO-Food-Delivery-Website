import React, { useEffect, useState } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Container, Table } from 'react-bootstrap';
//import './ManageBlogs.css'

const MangeBlogs = () => {
    const [allBlogs, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://shrieking-witch-03472.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [allBlogs]);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`https://shrieking-witch-03472.herokuapp.com/blogs/${id}`, {
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

    const updateApprove = allBlogs.find(approve => approve.status = 'Approved');

    const handleApprove = id => {

        fetch(`https://shrieking-witch-03472.herokuapp.com/blogs/${id}`, {
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
                                <th>Id</th>
                                <th>Blog Title</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Remove Item</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allBlogs.map(allBlog => (

                                    <tr>
                                        <td>{allBlog?._id}</td>
                                        <td>{allBlog?.name}</td>
                                        <td>{allBlog?.date}</td>
                                        <td>{allBlog?.status}</td>
                                        <td className="text-center">
                                            <button onClick={() => handleDelete(allBlog?._id)} className="border-0 btn btn-danger">Remove</button>
                                            <button onClick={() => handleApprove(allBlog?._id)} className="border-0 btn btn-success ms-3">Approve</button>
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

export default MangeBlogs;