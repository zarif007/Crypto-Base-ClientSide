import React from 'react'

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';

import icon from '../../Images/icon.png'
import { Card } from 'antd';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <>
          <Card>
            <header className='navbar container' >
                <Link className='navbar__item navbar__img' to='/'><img style={{height: 50}} src={icon} /></Link>
                <Link to='/' className='navbar__item'><h3>About Us</h3></Link>
                <Link to='/' className='navbar__item'><h3>About Us</h3></Link>
                <Link to='/' className='navbar__item'><h3>About Us</h3></Link>
                
            </header>
          </Card>
        </>
      );
    
}

export default Navbar
