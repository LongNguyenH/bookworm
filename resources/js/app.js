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
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Sale from './component/BookOnSale';
import Product from './component/Product';
import Cart from './component/Cart';
import Footer from './component/Footer';
import About from './component/About';
import Book from './component/Book';
import 'bootstrap/dist/css/bootstrap.min.css';
import Featured from './component/Featured';
import './component/styles.css';
import Navbartop from './component/navbar';
/* import Login from './component/Login'; */

function App() {
  /* const [loggedIn, setLoggedIn] = React.useState(false);
  const login = () => {

    setLoggedIn(true);

}; */

  return (
    <React.Fragment>
    <Navbartop/>
      <div className="mx-5 my-3">
        <Routes>
          <Route path='/shop' element={ 
              <Book/>
          }/>
          <Route path='/' element={ 
            <div className='row'>
            <React.Fragment>   
              <Sale/>
              <Featured/>
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

