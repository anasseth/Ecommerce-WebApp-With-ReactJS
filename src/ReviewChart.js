import React from 'react';
import logo from './StoreHeader/gogad3.PNG';
import './ReviewChart.css';
// import StoreHeader from './StoreHeader/StoreHeader.js'
// import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

function ReviewCart() {
  return (
    <div className='Cart'>
      <div className="ReviewChart">
        <div className='ReviewCartHeading'>Review Cart</div>
        <div className='TableCart'>
 

          <table >

            <tr className='HeadingChart'>
              <td className='product'>Products</td>
              <td className='price'>Price</td>
              <td className='quantity'>Quantity</td>
            </tr>


            <tr>
              <td className='product1'>Smart Watch Apple</td>
              <td className='price1'>$350</td>
              <td><input type='number' className='quantity1' defaultValue='1' /></td>
            </tr>
            <tr>
              <td className='product1'>Smart Watch Apple</td>
              <td className='price1'>$350</td>
              <td><input type='number' className='quantity1' defaultValue='1' /></td>
            </tr>
            <tr>
              <td className='product1'>Smart Watch Apple</td>
              <td className='price1'>$350</td>
              <td><input type='number' className='quantity1' defaultValue='1' /></td>
            </tr>
            <tr>
              <td className='product1'>Smart Watch Apple</td>
              <td className='price1'>$350</td>
              <td><input type='number' className='quantity1' defaultValue='1' /></td>
            </tr>
            <tr>
              <td className='product1'>Smart Watch Apple</td>
              <td className='price1'>$350</td>
              <td><input type='number' className='quantity1' defaultValue='1' /></td>
            </tr>
            <tr>
              <td className='product1'>Smart Watch Apple</td>
              <td className='price1'>$350</td>
              <td><input type='number' className='quantity1' defaultValue='1' /></td>
            </tr>
            <tr>
              <td className='product1'>Smart Watch Apple</td>
              <td className='price1'>$350</td>
              <td><input type='number' className='quantity1' defaultValue='1' /></td>
            </tr>
            <tr>
              <td className='product1'>Smart Watch Apple</td>
              <td className='price1'>$350</td>
              <td><input type='number' className='quantity1' defaultValue='1' /></td>
            </tr>
            <tr>
              <td className='product1'>Smart Watch Apple</td>
              <td className='price1'>$350</td>
              <td><input type='number' className='quantity1' defaultValue='1' /></td>
            </tr>


            {/* <tr className='TotalPrice'>
              <td colSpan='3' >Total Price : $350</td>
            </tr> */}

            

          </table>

        </div>

        {/* 
      <div className='footer'>Developed By Muhammad Anas</div> */}
      </div>
      <div className='PaymentDetails'>
        <img src={logo} />
        <br />
        <b className='cardDetailLogo'>GO GADGETS</b>
        <br />
        <b>''Thank<i class="fas fa-heart love"></i>you For Shopping''</b>
        <br />

        <input type='text' placeholder='Enter Your Name' />
        <br />
        <input type='text' placeholder='Enter Your E-mail' />
        <br />
        <input type='text' placeholder='Enter Your CellNo.' />
        <br />
        <input type='text' placeholder='Enter Your Address' />
        <br />
        <input type='text' value='$550' />
        <br />
        <button className='proceedPayment'> Proceed For Payment Details</button>
      </div>
      <div className='TotalPrice'>Total Price : $550</div>
    </div>
  );
}

export default ReviewCart;
