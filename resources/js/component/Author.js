import React, { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import api from '../api';
function Author({handleAuthor}) {
    const [authors,setAuthors]=useState([]);   
    const [author_filter,setAuthor_filter]=useState();
    const [author_name,setAuthorName]=useState();
  useEffect(()=>{
    api
    .get("api/authors")
    .then((response)=>response.data)
    .then((response)=>{
        setAuthors(response);
    });
    },[]);
    
    return (   
        <section className='flex-column d-flex '>
        {authors.map((author)=>{
                return(
                    <Button variant="default" className="filter_btn container-fluid p-0" key={author.id} onClick={()=>{
                        setAuthor_filter(author.id);
                        setAuthorName(author.author_name);
                        handleAuthor(author.id,author.author_name);
                    }}>
                    {author.author_name}
                    </Button>                
                );
            })}
        </section>          
    )
    
}
export default Author;
