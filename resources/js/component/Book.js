import React, { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

import Category from './CategoryFilter';
import Author from './AuthorFilter';
import { Accordion, Button, Card, Dropdown } from 'react-bootstrap';
function Book() {
    let navigate=useNavigate();
    const [books,setBooks]=useState([]);
    const [author_filter,setAuthor_filter]=useState();
    const [category_filter,setCategory_filter]=useState();
    const [sortby,setSortby]=useState();
    const [mode,setMode]=useState();
    const handleCategory=cat=>{
        setCategory_filter(cat);
        handleChange();
    }
    const handleAuthor=aut=>{
        setAuthor_filter(aut);
        handleChange();
    }
  useEffect(()=>{
    axios
    .get(`http://bookworm.com/api/books`,{params:{
        category_id:category_filter,
        author_id:author_filter,
        sortby:sortby,
        mode:mode
    }})
    .then((response)=>response.data)
    .then((response)=>{
        setBooks(response);
    });
    },[]);
    function handleChange(){
        axios
        .get(`http://bookworm.com/api/books`,{params:{
            category_id:category_filter,
            author_id:author_filter,
            sortby:sortby,
            mode:mode
        }})
        .then((response)=>response.data)
        .then((response)=>{
            setBooks(response);
        });
    }
    function toProduct(){
/* navigate("/product") */
    }
        return (
            <div  className='d-flex justify-content-between'>
            <div className="col-2" >
            {/* <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                <Accordion.Header className='p-0'><p className='fw-bold container-fluid p-0 m-0'>Category</p></Accordion.Header>
                <Accordion.Body className='container-fluid p-0'>
                    <Category handleCategory={handleCategory}/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
            <Accordion.Header className='p-0'><p className='fw-bold container-fluid p-0 m-0'>Author</p></Accordion.Header>
                <Accordion.Body className='container-fluid p-0'>
                    <Author handleAuthor={handleAuthor}/>
                </Accordion.Body>
            </Accordion.Item>
              </Accordion> */}
              
            </div>
            <div className=" col-10 ">
                    <div className='d-flex flex-row justify-content-between'>
                        <div>
                            Showing
                        </div>
                        <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Sort By
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Button variant="default" className="filter_btn" onClick={()=>{
                                    setSortby('onsale');
                                    setMode('desc');
                                    handleChange();
                                }}>Sort by on sale
                                </Button>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Button variant="default" className="filter_btn" onClick={()=>{
                                    setSortby('popularity');
                                    setMode('desc');
                                    handleChange();
                                }}>Sort by popularity
                                </Button>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Button variant="default" className="filter_btn" onClick={()=>{
                                    setSortby('price');
                                    setMode('asc');
                                    handleChange();
                            }}>Sort by by price:low to high
                             </Button>
                             </Dropdown.Item>
                            <Dropdown.Item>
                                <Button variant="default" className="filter_btn" onClick={()=>{
                                    setSortby('price');
                                    setMode('desc');
                                    handleChange();
                                }
                                }>Sort by by price:high to low 
                                </Button>
                            </Dropdown.Item>
                        </Dropdown.Menu>                 
                        </Dropdown>
                    </div>
                    <div className='d-flex flex-row row row-cols-4 gap-2 m-0 justify-content-between'>
                        {books.map((book)=>{
                            
                            return(
                                <Link className='card-container row m-0' 
                                key={book.id} to={'/product'}
                                state={{ product_id: (book.id) }} >
                                <Card className='container-fluid  m-0 p-0 text-black text-start'  >
                                    
                                    {book.book_cover_photo!==null &&
                                    
                                    <Card.Img variant="top" src={require(`../../assets/bookcover/${book.book_cover_photo}.jpg`).default} />
                                    }
                                    <Card.Body>
                                        <Card.Title>{book.book_title}</Card.Title>
                                        <Card.Text>{book.author_name}</Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item className="card-price">${book.book_price}</ListGroup.Item>
                                    </ListGroup>
                                </Card>         
                                </Link>                           
                            );
                            
                        })}
                    </div>
            </div>
            </div>
        )
    
}
export default Book;
