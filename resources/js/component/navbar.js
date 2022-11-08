import React, {Component, useState} from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';
import { useEffect } from "react";
function Navbartop() {
    const [userName,setUserName]=useState(['Long',]);
    const [url,setUrl]=useState();
    const [nav_bar,setNavBar]=useState();
    useEffect(()=>{
        setUrl(window.location.pathname);
        
    },[])
        return (
            <Navbar className='bg-primary sticky-top p-0 m-0'>
                <Container className='my-3'>
                    <Navbar.Brand><Link className="navbar-brand" to="/">
                    <img src={require("../../assets/bookworm_icon.svg").default}>
                    </img>Bookworm
                        </Link></Navbar.Brand>
                    <Nav>
                    {url=='/'&&
                        <Nav.Link className="nav-item active ">
                            <Link className="nav-link text-decoration-underline" to="/">Home</Link>
                        </Nav.Link>
                    }
                    {url!='/'&&    
                        <Nav.Link className="nav-item ">
                            <Link className="nav-link" to="/">Home</Link>
                        </Nav.Link>
                    }
                    {url=='/shop'&&
                        <Nav.Link className="nav-item  ">
                            <Link className="nav-link text-decoration-underline" to="/shop">Shop</Link>
                        </Nav.Link>
                    }
                    {url!='/shop'&&
                        <Nav.Link className="nav-item">
                            <Link className="nav-link" to="/shop">Shop</Link>
                        </Nav.Link>
                    }
                    {url=='/about'&&
                        <Nav.Link className="nav-item ">
                            <Link className="nav-link text-decoration-underline" to="/about">About</Link>
                        </Nav.Link>
                    }
                    {url!='/about'&&
                        <Nav.Link className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </Nav.Link>
                    }
                    {url=='/Cart'&&
                        <Nav.Link className="nav-item ">
                            <Link className="nav-link text-decoration-underline" to="/cart">Cart</Link>
                        </Nav.Link>
                    }
                    {url!='/Cart'&&
                        <Nav.Link className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </Nav.Link>
                    }
                    {url=='/Login'&&
                        <Nav.Link className="nav-item ">
                            <Link className="nav-link text-decoration-underline" to="/login">Sign in</Link>
                        </Nav.Link>
                    }
                    {url!='/Login'&&
                        <Nav.Link className="nav-item">
                            <Link className="nav-link" to="/login">Sign in</Link>
                        </Nav.Link>
                    }
                        <Nav.Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
        )
}

export default Navbartop;
