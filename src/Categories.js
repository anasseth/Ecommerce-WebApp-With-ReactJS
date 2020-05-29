import React from 'react';
import logo from './logo.svg';
import './Categories.css';
// import StoreHeader from './StoreHeader/StoreHeader.js'
// import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

function Categories() {
  return (
    <div className="Categories">
      <b className='CategoryTitle'>Select Categories <i class="fas fa-shopping-cart"></i></b>
      <div className='List'> 
      <br />
      <p className='ListTitle'> <i class="fas fa-mobile"></i> Smartphone Cases</p>
      <br />
      <p className='ListTitle'><i class="far fa-clock"></i> SmartWatches</p>
      <br />
      <p className='ListTitle'><i class="fas fa-headphones-alt"></i> Headphones</p>
      <br />
      <p className='ListTitle'><i class="fas fa-volume-up"></i> Speakers</p>
      <br />
      <p className='ListTitle'><i class="fas fa-volume-up"></i> Bluetooth Devices</p>
      <br />
      <p className='ListTitle'><i class="fas fa-volume-up"></i> Laptop Spare</p>
      </div>
    </div>
  );
}

export default Categories;
