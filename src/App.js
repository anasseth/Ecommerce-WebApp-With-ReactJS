import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AdminLogIn from './AdminLogIn.js'
import StoreHeader from './StoreHeader/StoreHeader.js'
import AdminStoreHeader from './StoreHeader/AdminStoreHeader.js'
import AdminStoreHeader2 from './StoreHeader/AdminStoreHeader2.js'
import AdminDashBoardPanel from './AdminDashBoardPanel.js'
import Categories from './Categories.js'
import ShoppingPanel from './ShoppingPanel.js'
import ReviewCart from './ReviewChart.js'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
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


      <hr />
      <hr />
      <hr />

      {/* <div className='box'>
      <Categories />
      <ShoppingPanel />
      </div> */}

      {/* 
      <ReviewCart /> */}

      <AdminLogIn />


    </div>
  );
}

export default App;
