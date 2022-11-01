import React, {Component, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {
    const [userName,setUserName]=useState(['Long',]);
        return (
            /* Header */
        <nav id="header" class="navbar fixedtop">
            <div class="col-8"></div>
            <div class="container-fluid align-item-right col-4">
                <div class="menu-item col-1 text-center"><span class="menu-item-text align-middle"><Link to= "/">Home</Link></span></div>
                <div class="menu-item col-1 text-center"><span class="menu-item-text align-middle"><Link to= "/shop">Shop</Link></span></div>
                <div class="menu-item col-1 text-center"><span class="menu-item-text align-middle"><Link to= "/about">About</Link></span></div>
                <div class="menu-item col-1 text-center"><span class="menu-item-text align-middle"><Link to= "/cart">Cart</Link></span></div>
                <div class="menu-item col-1 text-center"><span class="menu-item-text align-middle"><Link to= "/signin">Sign in</Link></span></div>
                {/* <div class="nav-details col-1">
                <p class="nav-username">{userName} </p>
                </div> */}
            </div>

        </nav>
        )
}

export default Navbar;
