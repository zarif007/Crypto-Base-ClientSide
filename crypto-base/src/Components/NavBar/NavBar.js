import React from 'react'



import icon from '../../Images/icon.png'
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <>
          <Card style={{marginBottom: 50}}>
            <header className='navbar container'>
                <Link to='/' className='navbar__item navbar__img' ><img style={{height: 50}} src={icon} /></Link>
                
                <Link to='/cryptocurrencies' className='navbar__item'><h3>Cryptos</h3></Link>
                <Link to='/news' className='navbar__item'><h3>News</h3></Link>
                <Link to='/' className='navbar__item'><Button type="primary" style={{height: 40}}>Sign Up</Button></Link>
                <Link to='/' className='navbar__item'><Button type="primary" style={{height: 40}}>GET STARTED</Button></Link>
            </header>
          </Card>
        </>
      );
    
}

export default Navbar
