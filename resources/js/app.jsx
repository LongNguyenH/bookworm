
import React from 'react';
import './App.css';
import Book from './component/Book';
import Navbar from './component/navbar';
import { Route,Routes } from 'react-router-dom';
import Sale from './component/BookOnSale';
import Recommend from './component/BookRecommend';
import Popular from './component/BookPopular';
import { Tab, Tabs } from 'react-bootstrap';
import Product from './component/Product';
import Cart from './component/Cart';
import Footer from './component/Footer';
import About from './component/About';
import Login from './component/Login';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const login = () => {

    setLoggedIn(true);

};
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
          }/>
          <Route path='/login' element={

            <Login login={login} />

          } />
        </Routes>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
