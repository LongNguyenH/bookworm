import React, { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import { Button } from 'react-bootstrap';
function Author({handleAuthor}) {
    const [authors,setAuthors]=useState([]);   
    const [author_filter,setAuthor_filter]=useState();
  useEffect(()=>{
    axios
    .get("http://bookworm.com/api/authors")
    .then((response)=>response.data)
    .then((response)=>{
        setAuthors(response);
    });
    },[]);
    
        return (
             
            <div className='flex-column d-flex '>
            {authors.map((author)=>{
                    return(
                        <Button variant="default" className="filter_btn container-fluid p-0" key={author.id} onClick={()=>{
                            setAuthor_filter(author.id);
                            handleAuthor(author.id);
                        }}>
                        {author.author_name}
                        </Button>                
                    );
                })}
            </div>          
        )
    
}
export default Author;
