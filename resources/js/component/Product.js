import React, { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import { Button, Image, ListGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Review from './Review';
function Product() {
    const [products,setProduct]=useState([]); 
    const [quantity,setQuantity]=useState(0);
    const [reviews,setReview]=useState([]);
    let location = useLocation();
    const {product_id}=location.state;
    let [cart,setCart]=useState([]);
    let localCart = localStorage.getItem("cart");
    //increase counter
  const increase = () => {
    setQuantity(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setQuantity(count => count - 1);
  };
  const addItem = (item) => {
  
    //create a copy of our cart state, avoid overwritting existing state
    let cartCopy = [...cart];
    
    /* //assuming we have an ID field in our item
    let {ID} = item;
    
    //look for item in cart array
    let existingItem = cartCopy.find(cartItem => cartItem.ID == ID);
    
    //if item already exists
    if (existingItem) {
        existingItem.quantity += item.quantity //update item
    } else { //if item doesn't exist, simply add it
      cartCopy.push(item)
    } */
    cartCopy.push(item)
    //update app state
    setCart(cartCopy)
    
    //make cart a string and store in local space
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart)
    
}
    useEffect(()=>{
        axios
        .get(`http://bookworm.com/api/product/${product_id}`)
        .then((response)=>response.data)
        .then((response)=>{
            setProduct(response);
        });
        localCart=JSON.parse(localCart);
        if(localCart) setCart(localCart);
        },[]);
        
        return (        
            <section class="detail-page flex-grow-1">
                {products.map((product)=>{
                    return(
                        <div key={product.id}>
                            <div className='d-flex justify-content-start px-4 '>
                                <h2 className='fw-bold border-bottom container-fluid p-0'>

                            {product.category_name}</h2>
                            </div>
                        <div className='d-flex justify-content-between px-4'>
                            <div className='col-8 square border'>
                            <div className='row'>
                                <div className='col-4'>
                                {product.book_cover_photo!==null &&
                                    <Image src={require(`../../assets/bookcover/${product.book_cover_photo}.jpg`).default} className='img-fluid '/>
                                    }
                                    <div className='d-flex flex-end'>
                                    By <p className='fw-bold'> 
                                    {product.author_name}
                                    </p>
                                    </div>
                                </div>
                                <div className='col-8'>
                                    <h3 className='fw-bold'>{product.book_title}</h3>
                                    <div>
                                        {product.book_summary}
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className='col-4 square border ms-2 '>
                            <ListGroup className="list-group-flush">
                                {product.final_price=== product.book_price&&
                                <ListGroup.Item className="fw-bold bg-primary container-fluid px-2">

                                    ${product.book_price}
                                </ListGroup.Item>
                                }
                                {product.final_price!== product.book_price&&
                                <ListGroup.Item className='d-flex bg-primary container-fluid px-2' >
                                    <p className="text-decoration-line-through "> ${product.book_price}</p>
                                    <p className="fw-bold"> ${product.final_price}</p>
                                    </ListGroup.Item>
                                }
                                <ListGroup.Item className='d-flex flex-column gap-1 '>
                                    <p>Quantity</p>
                                    <div className="btn__container container-fluid px-0 d-flex ">
                                        <Button className="control__btn col-3 p-0" onClick={decrease}>-</Button>
                                        <span className="counter__output col-6 text-align-center">{quantity}</span>
                                        <Button className="control__btn col-3 p-0" onClick={increase}>+</Button>
                                        
                                    </div>
                                    <div className='container-fluid p-0'>
                                        <Button className='container-fluid' onClick={()=>{
                                            addItem({
                                                id:product_id,
                                                title:product.book_title,
                                                author:product.author_name,
                                                photo:product.book_cover_photo,
                                                quantity:quantity,
                                                price:product.book_price,
                                                final_price:product.final_price});
                                            
                                        }}>Add to cart</Button>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>     
                            </div>
                        </div>
                        </div>
                        );
                }
                )
            }
            <Review />
            </section>    
        )
    
}
export default Product;
