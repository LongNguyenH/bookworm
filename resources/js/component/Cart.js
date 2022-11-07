import React, { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import { Button, Card, Image, ListGroup, ListGroupItem, Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Review from './Review';
import CardHeader from 'react-bootstrap/esm/CardHeader';
function Cart() {
    const [cart,setCart]=useState([]);
    let [cart_total,setCart_total]=useState(0);
    const [quantity,setQuantity]=useState();
    let localCart = localStorage.getItem("cart");
    let cart_total_v=0;
    //increase counter
  const increase = () => {
    setQuantity(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setQuantity(count => count - 1);
  };
  const editItem = (itemID, amount) => {
  
    let cartCopy = [...cart]
    
    //find if item exists, just in case
    let existentItem = cartCopy.find(item => item.id == itemID);
    
    //if it doesnt exist simply return
    if (!existentItem) return
    
    //continue and update quantity
    existentItem.quantity += amount;
    
    //validate result
    if (existentItem.quantity <= 0) {
      //remove item  by filtering it from cart array
      cartCopy = cartCopy.filter(item => item.id != itemID)
    }
    //again, update state and localState
    setCart(cartCopy);
    
    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem('cart', cartString);
    }
    
    
    useEffect(()=>{
        localCart = JSON.parse(localCart);
        //load persisted cart into state if it exists
        if (localCart) setCart(localCart)
        },[]);  
        const total =cart.reduce((total,item)=>
        total=(total+(item.quantity*item.final_price)).toFixed(2),0
        )
        return (        
            <section className='d-flex justify-content-between px-4'>
                <div className='col-lg-8'>
                <Table >
                <thead>
                    <tr>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                    </tr>
                </thead>
                <tbody>    
                    {cart.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>
                                    <div className='d-flex product-column g-3'>
                                    <Image src={require(`../../assets/bookcover/${item.photo}.jpg`).default} className='img-fluid '/>
                                    <div className="">
                                        <p className="fw-bold">{item.title}</p>
                                        <p className='font-20px'> {item.author}</p>
                                    </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="price-column">
                                        <p className="font-20px">{item.price}</p>
                                        <p>{item.final_price}</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="quantity-column d-flex container-fluid p-0">
                                    <span className='bg-primary col-4 p-0 pointer' onClick={()=>{
                                        editItem(item.id,-1)
                                    }}>-</span>
                                    <span className='bg-primary col-4 p-0' >{item.quantity}</span>
                                    <span className='bg-primary col-4 p-0 pointer' onClick={()=>{
                                        editItem(item.id,1)
                                    }}>+</span>
                                    </div>
                                </td>
                                <td>
                                <div className="total-column">
                                    <p className="font-20px">
                                        $ {(item.quantity*item.final_price).toFixed(2)}
                                        </p>
                                    </div>
                                </td>
                            
                            </tr>
                            
                            
                        )
                    })
                    
                    }
                </tbody>

                </Table>
                </div>
                <div className="col-lg-4">
                    
                    <Card className="card-totals">
                    <CardHeader className="card-header">
                        <p className="text-center">Cart Totals</p>
                    </CardHeader>
                    <Card.Body className="justify-content-center d-flex flex-column"> 
                        <p className="fw-bold text-center">${total}</p>
                        <br />
                        <a>Place order</a>
                    </Card.Body>
                    </Card>
                </div>
                
            </section>    
        )
    
}
export default Cart;
