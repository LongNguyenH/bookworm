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
    
    const [author_name,setAuthorName]=useState();
    const [category_name,setCategoryName]=useState();
    const [perPage,setPerPage]=useState(5);
    const [lastPage,setLastPage]=useState(1);
    const handleCategory=(cat,name)=>{
        setCategory_filter(cat);
        setCategoryName(name);
        /* handleChange(); */
    }
    const handleAuthor=(aut,name)=>{
        setAuthor_filter(aut);
        setAuthorName(name);
        /* handleChange(); */
    }
    const handlePageClick= (page)=>{
        setCurrentPage(page);
    }
    for(let i = 1; i < lastPage; i++) {
        if (i!= currentPage) {
            paginationNumber.push(
            <li className="page-item">
            <Button className="text-color-black page-link" 
            onClick={()=>
                handlePageClick(i)
            }>
                {i}
            </Button>
            </li>
            )
        }
        if (i== currentPage) {
            paginationNumber.push(
                <li className="page-item">
                <Button className="text-color-black page-link bg-primary text-white" 
                onClick={()=>
                    handlePageClick(i)
                }>
                    {i}
                </Button>
                </li>
                )
        }
    }
  useEffect(()=>{
    async function fetchMyAPI() {
        await api
        .get(`api/books`,{params:{
            category_id:category_filter,
            author_id:author_filter,
            sortby:sortby,
            mode:mode,
            page:currentPage,
            per_page:perPage
        }})
        .then((response)=>response.data)
        
        .then((response)=>{
            const books_response = response.data;
            books_response.map((book) => (
                Object.keys(book).forEach((key) => {
                    if (key === 'book_cover_photo') {
                        if (book[key] === null || book[key] === 'null') {
                            book[key] = objectBookCover['default'];
                        } else {
                            book[key] = objectBookCover[book[key]];
                        }
                    }
                })
            ))
            setBooks(books_response);
            setCurrentPage(response.current_page);
            setLastPage(response.last_page);
        });
        
    }
    fetchMyAPI();
    
    },[author_filter,category_filter,currentPage,perPage]);
    /* function handleChange(){
        api
        .get(`api/books`,{params:{
            category_id:category_filter,
            author_id:author_filter,
            sortby:sortby,
            mode:mode,
            page:currentPage,
            per_page:perPage
        }})
        .then((response)=>response.data)
        .then((response)=>{
            setBooks(response.data);
            setCurrentPage(response.current_page);
            setLastPage(response.last_page);
        });
    } */
        return (
            
            <section>
                <div className='d-flex'>
                    Books filter by: 
                    {category_name!=null&&
                    <p>Category:{category_name}</p>
                    }
                    {author_name!=null&&
                    <p>Author:{author_name}</p>
                    }
                    
                </div>
                <div className='d-flex justify-content-between flex-wrap'>
                    <div className="col-12 col-lg-2 mb-4 pe-3" >
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
                    <div className="col-12 col-lg-10 ">
                        <div className='d-flex justify-content-between'>
                            <div>
                                Showing 
                            </div>
                            <div className='d-flex flex-row'>
                                <Dropdown className='ms-2'>
                                <Dropdown.Toggle  id="dropdown-basic" className='.bg-primary' variant='primary'>
                                    Sort By
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <Button variant="default" className="filter_btn" onClick={()=>{
                                            setSortby('onsale');
                                            setMode('desc');
                                            /* handleChange(); */
                                        }}>Sort by on sale
                                        </Button>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Button variant="default" className="filter_btn" onClick={()=>{
                                            setSortby('popularity');
                                            setMode('desc');
                                            /* handleChange(); */
                                        }}>Sort by popularity
                                        </Button>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Button variant="default" className="filter_btn" onClick={()=>{
                                            setSortby('price');
                                            setMode('asc');
                                            /* handleChange(); */
                                    }}>Sort by by price:low to high
                                        </Button>
                                        </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Button variant="default" className="filter_btn" onClick={()=>{
                                            setSortby('price');
                                            setMode('desc');
                                            /* handleChange(); */
                                        }
                                        }>Sort by by price:high to low 
                                        </Button>
                                    </Dropdown.Item>
                                </Dropdown.Menu>                 
                                </Dropdown>
                                <Dropdown className='ms-2'>
                                <Dropdown.Toggle  id="dropdown-basic" className='.bg-primary' variant='primary'>
                                    Show by {perPage}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <Button variant="default" className="filter_btn" onClick={()=>{
                                            setPerPage(5);
                                            /* handleChange(); */
                                        }}>Show 5
                                        </Button>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Button variant="default" className="filter_btn" onClick={()=>{
                                            setPerPage(10);
                                            /* handleChange(); */
                                        }}>Show 10
                                        </Button>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Button variant="default" className="filter_btn" onClick={()=>{
                                            setPerPage(15);
                                            /* handleChange(); */
                                        }}>Show 15
                                        </Button>
                                        </Dropdown.Item>
                                    <Dropdown.Item>
                                    <Button variant="default" className="filter_btn" onClick={()=>{
                                            setPerPage(20);
                                            /* handleChange(); */
                                        }}>Show 20
                                        </Button>
                                    </Dropdown.Item>
                                </Dropdown.Menu>                 
                                </Dropdown>
                            </div>
                        </div>
                        <div className='d-flex flex-row row row-cols-4 gap-2 m-0 justify-content-between'>
                            {books.map((book)=>{
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
                                            <ListGroup.Item className="card-price bg-primary text-white">${book.book_price}</ListGroup.Item>
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
                                    handlePageClick(currentPage-1)
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
            </section>
        )
    
}
export default Book;
