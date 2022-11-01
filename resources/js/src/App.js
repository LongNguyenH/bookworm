
import React from 'react';
import './App.css';
import Book from './component/Book';
import Navbar from './component/navbar';
import { Route,Routes } from 'react-router-dom';
import Category from './component/CategoryFilter';
import Author from './component/AuthorFilter';
import Sale from './component/BookOnSale';
import Recommend from './component/BookRecommend';
import Popular from './component/BookPopular';
import { Tab, Tabs } from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
    <Navbar/>
      <div className=" ml-4 mr-4">
        <Routes>
          <Route path='/shop' element={ 
            <div>
            <React.Fragment>   
              <Book/>
            </React.Fragment>
            </div>
          }/>
          <Route path='/' element={ 
            <div className='row'>
            <React.Fragment>   
              <Sale/>
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="Recommended" title="Recommended">
                  <Recommend/>
                </Tab>
                <Tab eventKey="Popular" title="Popular">
                  <Popular/>
                </Tab>
              </Tabs>
            </React.Fragment>
            </div>
          }/>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
