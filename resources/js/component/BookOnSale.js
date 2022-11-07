import React, { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Sale() {
    const [books,setBooks]=useState([]);
  useEffect(()=>{
    axios
    .get("http://bookworm.com/api/books/sale")
    .then((response)=>response.data)
    .then((response)=>{
        setBooks(response);
    });
    },[]);
    
        return (
            <div class="justify-content-center">
                BOOK ON SALE1
                <div className=" row row-cols-4 justify-content-center row-cols-4 flex-row border p-2 m-2">
                    {books.map((book)=>{
                        if(book.book_cover_photo!==null){
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
                        }
                    })}
                </div>
            </div>
        )
    
}
export default Sale;
