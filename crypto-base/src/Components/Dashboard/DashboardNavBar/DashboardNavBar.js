import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar, Row, Col } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import History from '../History/History';
import OwnedCurrencies from '../OwnedCurrencies/OwnedCurrencies';

const DashboardNavBar = () => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);

    const { path, url } = useRouteMatch();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 600) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div>
            <Button onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button> <br />
            <Row>
                
                <Col span={activeMenu && 6}>
                    {activeMenu && (
                        <div style = {{height:"100vh"}}>
                            <Menu>
                                <Menu.Item icon={<HomeOutlined />}>
                                    <Link to={`${url}`}>History</Link>
                                </Menu.Item>
                                <Menu.Item icon={<FundOutlined />}>
                                    <Link to={`${url}/ownedcurrencies`}>owned</Link>
                                </Menu.Item>
                                <Menu.Item icon={<FundOutlined />}>
                                    <Link to={`${url}/ownedcurrencies`}>owned</Link>
                                </Menu.Item>
                            </Menu>
                        </div>
                    )}
                </Col>

                <Col span={!activeMenu ? 24 : 18}>
                    <div>
                        <Switch>
                            <Route exact path={path}>
                                <History />
                            </Route>
                            <Route exact path={`${path}/ownedcurrencies`}>
                                <OwnedCurrencies />
                            </Route>
                        </Switch>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default DashboardNavBar
