

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { objectBookCover } from './BookCover';


export default class Featured extends React.Component {
  state = {
    onSaleBooks: [],
    recommendedBooks: [],
    popularBooks: [],
    defaultBooks: [],
    recommended: true //button
  };
  componentDidMount() {
    
    axios.get('http://bookworm.com/api/books/recommended').then((result) => {
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
    axios.get('http://bookworm.com/api/books/popular').then((result) => {
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
      <section className="home-page flex-grow-1">
        <div className="container">
          
          <div className="book-list">
            <div className="text-center">
              <p className="section-title font-20px mb-3">Featured Books</p>
              <div className="mb-4">
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
            <div id="mainRow" className="row">
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
                            <ListGroup.Item className="card-price">${book.book_price}</ListGroup.Item>
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