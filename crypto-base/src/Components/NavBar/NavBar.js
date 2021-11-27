import React from 'react'
import {Button, Menu, Typography, Avatar} from 'antd';
import {HomeOutLined, MoneyCollectionOutlined, BulbOutlined, FundOutLined, MenuOutLined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import icon from '../../Images/icon.png'

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size='large' />
            <Typography.Title level={2} className="Logo">
                <Link to='/'>CryptoBase</Link>
                {/* <Button className="menu-control-container">

                </Button> */}
            </Typography.Title>
        </div>
    </div>
  )
}

export default Navbar
