import './AdminStoreHeader2.css';
import React, { Component } from 'react';
import logo from './gogad3.PNG'
import Dp from './anas.jpg'

function AdminStoreHeader() {
    return (
        <div class="super">
            <div><b>Dashboard</b></div>

            <div id="acebook">
                {/* <img className='logo logoAdminStoreHeader' src={logo} /> */}
            </div>
            <div id="hoshiyaar">
                <i class="fas fa-bell"></i>
                {/* <img src={Dp} className='Dp' /> */}
            </div>
        </div>
    );

}

export default AdminStoreHeader;
