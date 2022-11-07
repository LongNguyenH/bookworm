import React, { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Category from './Category';
import Author from './Author';
import { Button, Card, Dropdown, Pagination } from 'react-bootstrap';
import api from '../api';
import { objectBookCover } from './BookCover';
function Book() {
    let navigate=useNavigate();
    let paginationNumber=[];
    const [books,setBooks]=useState([]);
    const [author_filter,setAuthor_filter]=useState();
    const [category_filter,setCategory_filter]=useState();
    const [sortby,setSortby]=useState();
    const [mode,setMode]=useState();
    const [currentPage,setCurrentPage]=useState();
    
    const [perPage,setPerPage]=useState();
    const [lastPage,setLastPage]=useState(1);
    const handleCategory=cat=>{
        setCategory_filter(cat);
        handleChange();
    }
    const handleAuthor=aut=>{
        setAuthor_filter(aut);
        handleChange();
    }
    const handlePageClick= (page)=>{
        setCurrentPage(page);
    }
    for(let i = 1; i < lastPage; i++) {
        paginationNumber.push(
        <li className="page-item">
        <Button className="text-color-black page-link" 
        onClick={()=>
            handlePageClick(i)
        }>
            {i}
        </Button>
        </li>
    )}
  useEffect(()=>{
    api
    .get(`api/books`,{params:{
        category_id:category_filter,
        author_id:author_filter,
        sortby:sortby,
        mode:mode,
        page:currentPage,
        perPage:perPage
    }})
    .then((response)=>response.data)
    .then((response)=>{
        setBooks(response.data);
        setCurrentPage(response.current_page);
        setLastPage(response.last_page);
    });
    },[,currentPage]);
    function handleChange(){
        api
        .get(`api/books`,{params:{
            category_id:category_filter,
            author_id:author_filter,
            sortby:sortby,
            mode:mode,
            page:currentPage,
            perPage:perPage
        }})
        .then((response)=>response.data)
        .then((response)=>{
            setBooks(response.data);
            setCurrentPage(response.current_page);
            setLastPage(response.last_page);
        });
    }
        return (
            <div  className='d-flex justify-content-between'>
            <div className="col-2 me-2" >
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                <Accordion.Header className='p-0'>
                    <p className='fw-bold container-fluid p-0 m-0'>Category</p>
                </Accordion.Header>
                <Accordion.Body className='container-fluid p-0'>
                    <Category handleCategory={handleCategory}/>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header className='p-0'>
                    <p className='fw-bold container-fluid p-0 m-0'>Author</p>
                </Accordion.Header>
                <Accordion.Body className='container-fluid p-0'>
                    <Author handleAuthor={handleAuthor}/>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
              
            </div>
            <div className=" col-10 ">
                <div className='d-flex flex-row justify-content-between'>
                    <div>
                        Showing 
                    </div>
                    <Dropdown  >
                    <Dropdown.Toggle  id="dropdown-basic" className='.bg-primary' variant='primary'>
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
                    <Dropdown  >
                    <Dropdown.Toggle  id="dropdown-basic" className='.bg-primary' variant='primary'>
                        Show by {perPage}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <Button variant="default" className="filter_btn" onClick={()=>{
                                setPerPage(5);
                                handleChange();
                            }}>Show 5
                            </Button>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Button variant="default" className="filter_btn" onClick={()=>{
                                setPerPage(10);
                                handleChange();
                            }}>Show 10
                            </Button>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Button variant="default" className="filter_btn" onClick={()=>{
                                setPerPage(15);
                                handleChange();
                            }}>Show 15
                            </Button>
                            </Dropdown.Item>
                        <Dropdown.Item>
                        <Button variant="default" className="filter_btn" onClick={()=>{
                                setPerPage(20);
                                handleChange();
                            }}>Show 20
                            </Button>
                        </Dropdown.Item>
                    </Dropdown.Menu>                 
                    </Dropdown>
                </div>
                <div className='d-flex flex-row row row-cols-4 gap-2 m-0 justify-content-between'>
                    {books.map((book)=>{
                        Object.keys(book).forEach((key) => {
                            if (key === 'book_cover_photo') {
                                if (book[key] === null || book[key] === 'null') {
                                book[key] = objectBookCover['default'];
                                } else {
                                book[key] =objectBookCover[book[key]];
                                }
                            }
                            })
                        return(
                            <Link className='card-container row m-0' 
                            key={book.id} to={'/product'}
                            state={{ product_id: (book.id) }} >
                            <Card className='container-fluid  m-0 p-0 text-black text-start'  >
                                
                                {book.book_cover_photo!==null &&
                                
                                <Card.Img variant="top" src={book.book_cover_photo} />
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
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <nav>
                      <ul className="pagination d-flex justify-content-center flex-wrap">
                        <li className="page-item">
                        <Button className="text-color-black page-link" 
                          onClick={()=>
                            handlePageClick(currentPage+1)
                          }>
                            Previous
                          </Button>
                        </li>
                        {paginationNumber}
                        <li className="page-item">
                          <Button className="text-color-black page-link" 
                          onClick={()=>
                            handlePageClick(currentPage+1)
                          }>
                            Next
                          </Button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
            </div>
            </div>
        )
    
}
export default Book;
