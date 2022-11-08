import React, { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../api';
import { objectBookCover } from './BookCover';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Sale() {
    const [books,setBooks]=useState([]);
    const item_no= {
            desktop:{
                breakpoint: { max: 3000, min: 100 },
                items: 4,
            }          
        };
  useEffect(()=>{
    api
    .get("api/books/sale")
    .then((response)=>response.data)
    .then((response)=>{
        const books_response = response;
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
    });
    },[]);
    
        return (
            <section class="justify-content-center">
                <div className='d-flex justify-content-between'>
                <p>ON SALE
                </p>
                <Link to={{
                    pathname:"/shop",
                    state:{
                        sortby:"onsale",
                        mode:"desc",
                    }
                }}
                >
                    <Button>
                    View all
                    </Button>
                </Link>
                
                </div>
                <div className="  border p-2 m-2">
                    <Carousel responsive={item_no}>
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
                                    {book.book_price===book.final_price &&
                                        <ListGroup.Item className="card-price bg-primary text-white d-flex">${book.book_price}</ListGroup.Item>
                                    }
                                    {book.book_price!==book.final_price &&
                                        <ListGroup.Item className="card-price bg-primary text-white d-flex">
                                            <p className='strike-through'>${book.book_price}</p> <p className='fw-bold'>${book.final_price}</p>
                                        </ListGroup.Item>
                                    
                                    }
                                    </ListGroup>
                                </Card>         
                            </Link>                                       
                        );
                        
                    })}
                    </Carousel>
                </div>
            </section>
        )
    
}
export default Sale;
