import React from 'react';
import Logo from '../../Images/Logo.svg';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo"><img src={Logo} alt="logo"/></div>
            <div className="nav">
                <li><a href="/home">Order</a></li>
                <li><a href="/home">Order Review</a></li>
            </div>
        </div>
    );
};

export default Navbar;