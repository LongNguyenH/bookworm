import React from 'react';
import ReactDOM from 'react-dom';

import { Route,Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Index from './index';
import Navbar from './navbar';
require('./index');
/* export default function App() {
 return (
  <Routes>
    <Navbar/>
      <div className="App">
        <Routes>
          <Route path='/home' element={<Index/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/hello' element={
            <Helloworld>
              
            </Helloworld>
          }>
          <Route path='child-1' element={<h1>child 1</h1>}></Route>
          <Route path='child-2' element={<h1>child 2</h1>}></Route>
          </Route>
        </Routes>
      </div>
    </Routes>
  );
} */
/* ReactDOM.render(
  <BrowserRouter><App/></BrowserRouter>
  ,
  document.getElementById('root')
); */