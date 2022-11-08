

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { objectBookCover } from './BookCover';
import api from '../api';


export default class Featured extends React.Component {
  state = {
    recommendedBooks: [],
    popularBooks: [],
    defaultBooks: [],
    recommended: true 
  };
  componentDidMount() {
    
    api
    .get('api/books/recommended').then((result) => {
      // console.log(result.data);
      const recommendedBooks = result.data;
      recommendedBooks.map((book) =>
        Object.keys(book).forEach((key) => {
          if (key === 'book_cover_photo') {
            if (book[key] === null || book[key] === 'null') {
              book[key] = objectBookCover['default'];
            } else {
              book[key] = objectBookCover[book[key]];
            }
          }
        })
      );
      this.setState({ recommendedBooks, defaultBooks: recommendedBooks });
    });
    api
    .get('api/books/popular').then((result) => {
      // console.log(result.data);
      const popularBooks = result.data;
      popularBooks.map((book) =>
        Object.keys(book).forEach((key) => {
          if (key === 'book_cover_photo') {
            if (book[key] === null || book[key] === 'null') {
              book[key] = objectBookCover['default'];
            } else {
              book[key] = objectBookCover[book[key]];
            }
          }
        })
      );
      this.setState({ popularBooks: popularBooks });
    });
  }
  recommendedBookClick = () => {
    this.setState({ defaultBooks: this.state.recommendedBooks });
    this.setState({ recommended: true });
  };
  popularBookClick = () => {
    this.setState({ defaultBooks: this.state.popularBooks });
    this.setState({ recommended: false });
  };

  render() {
    
    return (
      <section className="">
        <div className="container">
          <div className="book-list">
            <div className="text-center">
              <p className="mb-3">Featured Books</p>
              <div className="mb-4 d-flex gap-4 justify-content-center">
                <Button
                  color={this.state.recommended ? 'secondary' : 'link'}
                  onClick={this.recommendedBookClick}>
                  Recommended
                </Button>

                <Button
                  color={this.state.recommended ? 'link' : 'secondary'}
                  onClick={this.popularBookClick}>
                  Popular
                </Button>
              </div>
            </div>
            <div className="row">
              {this.state.defaultBooks.map((book) => { 
                return (
                  <Link className='card-container row m-0' 
                                key={book.id} to={'/product'}
                                state={{ product_id: (book.id) }} >
                    <Card className='container-fluid  m-0 p-0 text-black text-start'  >
                        
                        {book.book_cover_photo!==null &&
                        
                        <Card.Img variant="top" src={book.book_cover_photo} />
                        }
                        <Card.Body>
                            <Card.Title>{book.book_title}</Card.Title>
                            <Card.Text>{book.author_name}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                                    {book.book_price===book.final_price &&
                                        <ListGroup.Item className="card-price bg-primary text-white d-flex">${book.book_price}</ListGroup.Item>
                                    }
                                    {book.book_price!==book.final_price &&
                                        <ListGroup.Item className="card-price bg-primary text-white d-flex">
                                            <p className='text-decoration-line-through'>${book.book_price}</p> <p className='fw-bold'>${book.final_price}</p>
                                        </ListGroup.Item>
                                    
                                    }
                        </ListGroup>
                    </Card>         
                    </Link>              
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}