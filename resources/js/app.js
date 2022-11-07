/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from 'react';
import ReactDOM from 'react-dom';/* 
import './App.css'; */
import Navbar from './component/navbar';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Sale from './component/BookOnSale';
import Recommend from './component/BookRecommend';
import Popular from './component/BookPopular';
import { Tab, Tabs } from 'react-bootstrap';
import Product from './component/Product';
import Cart from './component/Cart';
import Footer from './component/Footer';
import About from './component/About';
import Book from './component/Book';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import Login from './component/Login'; */

function App() {
  /* const [loggedIn, setLoggedIn] = React.useState(false);
  const login = () => {

    setLoggedIn(true);

}; */
  return (
    <React.Fragment>
    <Navbar/>
      <div className=" ml-4 mr-4">
        <Routes>
          <Route path='/shop' element={ 
              <Book/>
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
          <Route path='/product' element={ 
              <Product/>
          }/>
          <Route path='/cart' element={ 
              <Cart/>
          }/>
          <Route path='/about' element={  
              <About/>
          }/>{/* 
          <Route path='/login' element={

            <Login login={login} />

          } /> */}
        </Routes>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default App;


ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

