import React, { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import { Button } from 'react-bootstrap';
function Category({handleCategory}) {
    const [categories,setCategories]=useState([]); 
    const [category_filter,setCategory_filter]=useState();
  useEffect(()=>{
    axios
    .get("http://bookworm.com/api/category")
    .then((response)=>response.data)
    .then((response)=>{
        setCategories(response);
    });
    },[]);
    
        return (
             
            <div>
            <h5>Category Filter</h5>
            <hr />
            <table class="table table-hover table-bordered table-responsive">
                <thead>
                    <tr class="table-dark">
                        <th scope="col">Category {category_filter}</th>
                    </tr>
                </thead>
                <tbody>
                {categories.map((category)=>{
                    return(
                        <tr key={category.id} >
                            <td scope="row">
                                <Button onClick={()=>{
                                    setCategory_filter(category.id);
                                    handleCategory(category.id);
                                }}>
                                {category.category_name}
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
export default Category;
