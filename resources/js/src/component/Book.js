import React, { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';
import Category from './CategoryFilter';
import Author from './AuthorFilter';
function Book() {
    const [books,setBooks]=useState([]);
    const [author_filter,setAuthor_filter]=useState();
    const [category_filter,setCategory_filter]=useState();
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
        author_id:author_filter
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
            author_id:author_filter
        }})
        .then((response)=>response.data)
        .then((response)=>{
            setBooks(response);
        });
    }
        return (
            <div  className='row'>
            <div className="col-2 " >
                {category_filter}
              <Category handleCategory={handleCategory}/>
              {author_filter}
              <Author handleAuthor={handleAuthor}/>
            </div>
            <div className=" row row-cols-4 col-10 justify-content-center row-cols-4 flex-row border p-2">
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
export default Book;
