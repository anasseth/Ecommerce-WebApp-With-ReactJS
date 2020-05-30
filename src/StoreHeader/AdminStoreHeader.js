import './StoreHeader.css';
import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import logo from './gogad3.PNG'
import Dp from './anas.jpg'
import logoTitle from './gogad4.PNG'
// import '../Dashboard.css'
import SideBar from '../Dashboard.js'
import { slide as Menu } from "react-burger-menu";


function AdminStoreHeader() {
    return (
        <div class="header">
            <div><b className='AdminStoreTitleHeader'>Dashboard</b></div>
            <div id="acebook">
                <img className='logo logoAdminStoreHeader' src={logo} />
            </div>
            <div id="hoshiyaar">
                {/* <i class="fas fa-bell"></i> */}
                {/* Muhammad Anas */}
                <img src={Dp} className='Dp' />
            </div>
        </div>
    );

}

export default AdminStoreHeader;
