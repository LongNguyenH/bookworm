import React, { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import api from '../api';
function Category({handleCategory}) {
    const [categories,setCategories]=useState([]); 
    const [category_filter,setCategory_filter]=useState();
    const [category_name,setCategoryName]=useState();
  useEffect(()=>{
    api
    .get("api/category")
    .then((response)=>response.data)
    .then((response)=>{
        setCategories(response);
    });
    },[]);
    
    return (
        <div className='flex-column d-flex '>
            {categories.map((category)=>{
                return(
                    <Button variant="default" className="filter_btn container-fluid p-0" key={category.id} onClick={()=>{
                        setCategory_filter(category.id);
                        handleCategory(category.id,category.category_name);

                    }}>
                    {category.category_name}
                    </Button>
                
                );
            })}
        </div>          
    )
    
}
export default Category;
