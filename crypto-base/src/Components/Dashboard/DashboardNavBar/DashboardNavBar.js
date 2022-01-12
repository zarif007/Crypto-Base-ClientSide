import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar, Row, Col, Timeline } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';
import { MenuOutlined, FieldTimeOutlined, DollarOutlined } from '@ant-design/icons';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import OwnedCurrencies from '../OwnedCurrencies/OwnedCurrencies';
import TimeLine from '../TimeLine/TimeLine';

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
                                <Menu.Item icon={<FieldTimeOutlined />}>
                                    <Link to={`${url}`}>TimeLine</Link>
                                </Menu.Item>
                                <Menu.Item icon={<DollarOutlined />}>
                                    <Link to={`${url}/ownedcurrencies`}>Assets</Link>
                                </Menu.Item>
                            </Menu>
                        </div>
                    )}
                </Col>

                <Col span={!activeMenu ? 24 : 18}>
                    <div>
                        <Switch>
                            <Route exact path={path}>
                                <TimeLine />
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
