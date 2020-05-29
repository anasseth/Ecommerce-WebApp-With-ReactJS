import React from 'react';
import logo from './logo.svg';
import './App.css';
import StoreHeader from './StoreHeader/StoreHeader.js'
import Categories from './Categories.js'
import ShoppingPanel from './ShoppingPanel.js'
import ReviewCart from './ReviewChart.js'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <StoreHeader />
      </Router>
      <hr />
      <hr />
      <hr />
      
      <div className='box'>
      <Categories />
      <ShoppingPanel />
      </div>
      
      
      {/* <ReviewCart /> */}


    </div>
  );
}

export default App;
