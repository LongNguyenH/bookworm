import React, { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import { Button, Image, ListGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function Review(){
    const [reviews,setReview]=useState([]);
    const [orderby,setOrderby]=useState([]);
    const [order,setOrder]=useState([]);
    let location = useLocation();
    const {product_id}=location.state;
    useEffect(()=>{
        axios
        .get(`http://bookworm.com/api/reviewById`,{params:{
            id:product_id,
            orderby:orderby,
            order:order
        }})
        .then((response)=>response.data)
        .then((response)=>{
            setReview(response);
        });
        },[]);
        return (        
            <div>
                <ListGroup className="list-group">       
                <div className='fw-bold' >
                    Custormer Review
                </div>                         
                {reviews.map((review)=>{
                    return(
                        <ListGroup.Item className="card-price bg-white" key={review.id}>
                            <div className='fw-bold' >
                                {review.review_title}
                            </div>
                            <div>
                                {review.review_details}
                            </div>
                        </ListGroup.Item>
                        
                        );
                }
                )
            }
            </ListGroup>
            </div>    
        )
}
export default Review;