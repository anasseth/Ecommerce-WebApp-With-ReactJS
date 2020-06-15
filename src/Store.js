import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AdminLogIn from './Component/AdminLogIn/AdminLogIn.js'
import StoreHeader from './Component/StoreHeader/StoreHeader.js'
import AdminStoreHeader from './Component/StoreHeader/AdminStoreHeader.js'
import AdminStoreHeader2 from './Component/StoreHeader/AdminStoreHeader2.js'
import AdminDashBoardPanel from './Component/AdminDashBoardPanel/AdminDashBoardPanel.js'
import Categories from './Component/Categories/Categories.js'
import ShoppingPanel from './Component/ShoppingPanel/ShoppingPanel.js'
import ReviewCart from './Component/ReviewChart/ReviewChart.js'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

function Store() {
  return (
    <div className="App">

      {/*             
      <Router>
        <StoreHeader />
      </Router> */}

      {/* Admin DashBoard Panel Work */}
      {/* <Router>
        <AdminStoreHeader />
        
      </Router>
      <br />
      
      <br />
      <br />
      
      <div>

        <AdminDashBoardPanel />

      </div> */}





      <Router>
        <StoreHeader />
      </Router>


      {/* <hr />
      <hr />
      <hr /> */}

      {/* <div className='box'>
      <Categories />
      <ShoppingPanel />
      </div> */}

      
      <ReviewCart />

      {/* <AdminLogIn /> */}


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  );
}

export default Store;
