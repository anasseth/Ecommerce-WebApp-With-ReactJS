import React from 'react';
import logo from '../StoreHeader/gogad3.PNG';
import './AdminLogIn.css';

function AdminLogIn() {
    return (
        <div className='LogInPanel'>
            <div className='LogInCredentials'>
                <img src={logo} className='AdminPanelLogo'/>
                <br />
                <b className='cardDetailLogo2'>ADMIN ACCESS ONLY</b>
                <br />
            
                <input className='AdminInput' type='email' placeholder='E-mail' />
                <br />
                <input className='AdminInput' type='password' placeholder='Password' />
                <br />
                <input className='AdminInput' type='password' placeholder='Security Key' />
                <br />
                <button className='LogIn'><i class="fas fa-sign-in-alt"></i> Log In</button>
            </div>
        </div>
    );
}

export default AdminLogIn;