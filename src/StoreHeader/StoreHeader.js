import './StoreHeader.css';
import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import logo from './gogad3.PNG'
import logoTitle from './gogad4.PNG'


function StoreHeader() {
    return (
        <div class="header">
            
                <div id="acebook">
                    {/* <h1 className='heading'>GO <b className='gadgets'>GADGETS</b> <i class="fas fa-mobile"></i></h1> */}
                    <img className='logo' src={logo} />
                </div>

                <div><b className='StoreTitleHeader'>GO GADGETS</b><br />""Get The Latest Gadget To Be With The Era""</div>

                <div id="hoshiyaar">
                    <Link id="guest" to='/'><i class="fa fa-user-shield"></i></Link>
                </div>
            
        </div>
    );

}

export default StoreHeader;
