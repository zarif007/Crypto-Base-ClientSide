import React, { useState } from 'react'


import icon from '../../Images/icon.png'
import { Card, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { changeCurrency } from '../../Services/realCurrencySlice'

const { Option } = Select;



const Navbar = () => {
    const realCurrency = useSelector(state => state.realCurrency.value);

    const dispatch = useDispatch();

    return (
        <>
          <Card style={{marginBottom: 50}}>
            <header className='navbar container'>
                <Link to='/' className='navbar__item navbar__img' ><img style={{height: 50}} src={icon} /></Link> 
                <Select defaultValue={realCurrency} style={{ width: 100 }} onChange={value => dispatch(changeCurrency(value)) }>
                  <Option value="USD">USD</Option>
                  <Option value="BDT">BDT</Option>
                </Select>
                <Link to='/cryptocurrencies' className='navbar__item' style={{paddingLeft: 3}}><h3>Cryptos</h3></Link>
                <Link to='/news' className='navbar__item'><h3>News</h3></Link>
                <Link to='/' className='navbar__item'><Button type="primary" style={{height: 40}}>Sign Up</Button></Link>
                <Link to='/' className='navbar__item'><Button type="primary" style={{height: 40}}>GET STARTED</Button></Link>
            </header>
          </Card>
        </>
      );
    
}

export default Navbar
