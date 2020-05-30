import React from 'react';
import './AdminDashBoardPanel.css';
import { ProgressBar } from 'react-bootstrap';
import Graph from './StoreHeader/graph.png'



function AdminDashBoardPanel() {
    return (

        <div className="AdminDashBoardPanel">


            <div className='ThirdItemBox'>

                <div className='TIB Y'>
                    <b>INVENTORY</b>
                    <br />
                    <b className='TIBlogo'><i class="fas fa-briefcase"></i></b>
                    <br />
                    <b className='TIBtitle3'>350</b>
                </div>
                <div className='TIB G'>
                    <b>USERS VISITED</b>
                    <br />
                    <b className='TIBlogo'><i class="fas fa-users"></i></b>
                    <br />
                    <b className='TIBtitle'>150K</b>
                </div>
                <div className='TIB R'>
                    <b>SALES</b>
                    <br />
                    <b className='TIBlogo'><i class="fas fa-shopping-cart"></i></b>
                    <br />
                    <b className='TIBtitle'>$3500</b>
                </div>
                <div className='TIB B'>
                    <b>PAYMENT LEFT</b>
                    <br />
                    <b className='TIBlogo'><i class="fas fa-money-bill-wave"></i></b>
                    <br />
                    <b className='TIBtitle'>15</b>
                </div>


            </div>

            <div className='FirstItemBox'>
                <div className='FIB'>
                    <b className='graphHeading'>Sales: 1 Jan, 2020 - 30 May, 2020</b>
                    {/* <br /> */}
                    <br />
                    <img className='graph' src={Graph} />
                </div>

                <div className='FIB'>
                    <b className='graphHeading'>Goal Completion</b>
                    {/* <br /> */}
                    <br />
                    <br />
                    Add Product To Cart
                    <ProgressBar striped variant="success" now={40} />
                    Complete Purchase
                    <ProgressBar striped variant="info" now={20} />
                    Servey For New Product
                    <ProgressBar striped variant="warning" now={60} />
                    Send Queries
                    <ProgressBar striped variant="danger" now={80} />

                </div>

            </div>
            <div className='SecondItemBox'>
                <div className='SIB'>
                    <b className='green'><i class="fas fa-sort-up"></i>17%</b>
                    <br />
                    <b>$35,210.43</b>
                    <br />
                    <b className='SIBtitle'>TOTAL REVENUE</b>
                </div>
                <div className='SIB'>
                    <b className='green'><i class="fas fa-sort-up"></i>0%</b>
                    <br />
                    <b>$10,390.90</b>
                    <br />
                    <b className='SIBtitle'>TOTAL COST</b>
                </div>
                <div className='SIB'>
                    <b className='green'><i class="fas fa-sort-up"></i>34%</b>
                    <br />
                    <b>$24,813.53</b>
                    <br />
                    <b className='SIBtitle'>TOTAL PROFIT</b>
                </div>
                <div className='SIB'>
                    <b className='red'><i class="fas fa-sort-down"></i>15%</b>
                    <br />
                    <b>1200</b>
                    <br />
                    <b className='SIBtitle'>GOAL COMPLETIONS</b>
                </div>
            </div>
            <div className='FourthItemBox'>
                <h2>LATEST ORDER</h2>
                <br />
                <table id='TableDash'>
                    <tr>
                        <th>ORDER ID</th>
                        <th>ITEMS</th>
                        <th>AMOUNT</th>
                        <th>STATUS</th>
                        <th>TIME LEFT</th>
                    </tr>

                    <tr>
                        <td className='dash'>ID9842</td>
                        <td className='dash'>Apple Smart Watch</td>
                        <td className='dash'>$120</td>
                        <td className='dash'><b className='Status Pending'>Pending</b></td>
                        <td className='dash'>15 Days</td>
                    </tr>
                    <tr>
                        <td className='dash'>ID9842</td>
                        <td className='dash'>Apple Smart Watch</td>
                        <td className='dash'>$120</td>
                        <td className='dash'><b className='Status Del'>Delivered</b></td>
                        <td className='dash'>15 Days</td>
                    </tr>
                    <tr>
                        <td>ID9842</td>
                        <td>Apple Smart Watch</td>
                        <td>$120</td>
                        <td><b className='Status Pending'>Pending</b></td>
                        <td>15 Days</td>
                    </tr>
                    <tr>
                        <td>ID9842</td>
                        <td>Apple Smart Watch</td>
                        <td>$120</td>
                        <td><b className='Status Del'>Delivered</b></td>
                        <td>15 Days</td>
                    </tr>
                    <tr>
                        <td>ID9842</td>
                        <td>Apple Smart Watch</td>
                        <td>$120</td>
                        <td><b className='Status Cancel'>Cancel</b></td>
                        <td>15 Days</td>
                    </tr>
                    <tr>
                        <td>ID9842</td>
                        <td>Apple Smart Watch</td>
                        <td>$120</td>
                        <td><b className='Status Ship'>Shipped</b></td>
                        <td>15 Days</td>
                    </tr>
                    <tr>
                        <td>ID9842</td>
                        <td>Apple Smart Watch</td>
                        <td>$120</td>
                        <td><b className='Status Pending'>Pending</b></td>
                        <td>15 Days</td>
                    </tr>
                </table>

            </div>

        </div>

    );
}

export default AdminDashBoardPanel;
