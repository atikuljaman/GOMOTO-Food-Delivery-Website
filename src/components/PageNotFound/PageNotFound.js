import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <div className="not-found-container d-flex justify-content-center align-items-center">
            <div className="pt-5">
                <NavLink to="/home">
                    <button className="notfound-btn border-0">Go Back</button>
                </NavLink>
            </div>
        </div>
    );
};

export default PageNotFound;