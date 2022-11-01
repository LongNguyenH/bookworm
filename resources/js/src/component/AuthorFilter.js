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
             
            <div>
            <h5>Author Filter</h5>
            <hr />
            <table class="table table-hover table-bordered table-responsive">
                <thead>
                    <tr class="table-dark">
                        <th scope="col">Author {author_filter}</th>
                    </tr>
                </thead>
                <tbody>
                {authors.map((author)=>{
                    return(
                        <tr key={author.id}>
                            <td scope="row">
                            <Button onClick={()=>{
                                    setAuthor_filter(author.id);
                                    handleAuthor(author.id);
                                }}>
                                {author.author_name}
                                </Button>
                                </td>
                        </tr>                               
                    );
                })}
                </tbody>
                    </table>
                </div>          
        )
    
}
export default Author;
