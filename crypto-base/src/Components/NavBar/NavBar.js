import React, { useState } from 'react'


import icon from '../../Images/icon.png'
import { Card, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { changeCurrency } from '../../Services/realCurrencySlice'
import useFireBase from '../../customHooks/useFireBase';

const { Option } = Select;



const Navbar = () => {
    const { user, logOut } = useFireBase();

    const realCurrency = useSelector(state => state.realCurrency.value);

    const dispatch = useDispatch();

    return (
        <>
          <Card style={{marginBottom: 50}}>
            <header className='navbar container'>
                <Link to='/' className='navbar__item navbar__img' ><img style={{height: 50}} src={icon} /></Link> 
                <Link to='/cryptocurrencies' className='navbar__item' style={{paddingLeft: 9}}><h3>Cryptos</h3></Link>
                <Link to='/news' className='navbar__item'><h3>Stories</h3></Link>
                {
                  user.displayName ? <>
                    <Link to='/login' className='navbar__item'>{user.displayName}</Link>
                    <Button type="primary" className='navbar__item' onClick={logOut} style={{height: 40, marginRight: 3}}>Log Out</Button>
                  </> : <>
                    <Link to='/login' className='navbar__item'><Button type="primary" style={{height: 40}}>Sign In</Button></Link>
                    <Link to='/register' className='navbar__item'><Button type="primary" style={{height: 40}}>GET STARTED</Button></Link>
                  </>
                }
                <Select defaultValue={realCurrency} style={{ width: 100 }} onChange={value => dispatch(changeCurrency(value)) }>
                  <Option value="USD">USD</Option>
                  <Option value="BDT">BDT</Option>
                </Select>
            </header>
          </Card>
        </>
      );
    
}

export default Navbar
