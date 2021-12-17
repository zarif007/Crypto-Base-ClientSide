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


const Navbar = () => {

    return (
        <>
          <Nav>
            <NavLink to='/'>
              <img style={{height: 50}} src={icon} alt='logo' />
            </NavLink>
            <Bars />
            <NavMenu>
              <NavLink to='/cryptocurrencies' activeStyle>
                Crypto Currencies
              </NavLink>
              <NavLink to='/services' activeStyle>
                Services
              </NavLink>
              <NavLink to='/contact-us' activeStyle>
                Contact Us
              </NavLink>
              <NavLink to='/sign-up' activeStyle>
                Sign Up
              </NavLink>
              {/* Second Nav */}
              {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
          </Nav>
        </>
      );
    
}

export default Navbar
