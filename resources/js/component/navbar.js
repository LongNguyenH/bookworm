import React, {Component, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {
    const [userName,setUserName]=useState(['Long',]);
        return (
            /* Header */
            <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top px-5">
            <Link className="navbar-brand" to="#">Logo</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/shop">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart(0)</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Sign in</Link>
                    </li>

                </ul>

            </div>
        </nav>
        )
}

export default Navbar;
