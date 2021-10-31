import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="h-100 d-flex align-items-center justify-content-center">
                <h1><Spinner animation="border" variant="warning" /></h1>
            </div>
        )
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ?
                    children
                    : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;