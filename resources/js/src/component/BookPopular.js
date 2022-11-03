import React, { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import { Card, ListGroup } from 'react-bootstrap';
function Popular() {
    const [books,setBooks]=useState([]);
  useEffect(()=>{
    axios
    .get("http://bookworm.com/api/books/popular")
    .then((response)=>response.data)
    .then((response)=>{
        setBooks(response);
    });
    },[]);
    
        return (
            <div>
                <div className=" row row-cols-4 justify-content-center row-cols-4 flex-row border p-2 m-2">
                    {books.map((book)=>{
                        if(book.book_cover_photo!==null){
                        return(
                            <Card key={book.id} >
                                <Card.Img variant="top" src={require(`../../assets/bookcover/${book.book_cover_photo}.jpg`)} />
                                <Card.Body>
                                    <Card.Title>{book.book_title}</Card.Title>
                                    <Card.Text>{book.author_name}</Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className="card-price">${book.book_price}</ListGroup.Item>
                                </ListGroup>
                                </Card>                                        
                        );
                        }
                    })}
                </div>
            </div>
        )
    
}
export default Popular;
