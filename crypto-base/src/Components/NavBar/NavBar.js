import React from 'react'
import {Button, Menu, Typography, Avatar} from 'antd';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import icon from '../../Images/icon.png'

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size='large'/>
            <Typography.Title level={2} className="Logo">
                <Link to='/'>CryptoBase</Link>
                {/* <Button className="menu-control-container">

                </Button> */}
            </Typography.Title>
        </div>
        <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined />}>
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
                <Link to='/cryptocurrencies'>Crypto Currencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to='/exchanges'>Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
                <Link to='/news'>News</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default Navbar
