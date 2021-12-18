import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic, Card } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../../Services/cryptoApi';
import { CryptoCurrencies, News } from '..';
import Spinner from '../spinner';
import CountUp from 'react-countup';
import { useSelector } from 'react-redux';
import realCurrencyStats from '../../realCurrencyStats';

const {Title} = Typography;

const HomePage = () => {

  const realCurrency = useSelector(state => state.realCurrency.value);

  const inRealCurrency = realCurrencyStats[realCurrency][0];
  
  const {data, isfetching} = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;

  if(isfetching) return <Spinner/>

  return (
    <>
      
      <Title level={2} className='heading'>Global Crypto Stats</Title>

      <div className="site-card-wrapper" style={{textAlign: 'center'}}>
        <Row gutter={16}>
          <Col xs={24} sm={12} lg={6}>
            <Card title="Total CryptoCurrencies" bordered={true}>
              <Title level={2}>
                <CountUp
                  start={0}
                  end={globalStats?.total}
                  duration={3}
                />
              </Title>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card title="Total Exchanges" bordered={true}>
              <Title level={2}>
                <CountUp
                  start={0}
                  end={globalStats?.totalExchanges}
                  duration={2}
                />
              </Title>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card title={`Total Market Cap (${realCurrency})`} bordered={true}>
              <Title level={2}>
                <CountUp
                  start={0}
                  end={globalStats?.totalMarketCap * inRealCurrency}
                  duration={5}
                />
              </Title>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card title={`Total 24H Volume (${realCurrency})`} bordered={true}>
              <Title level={2}>
                <CountUp
                  start={0}
                  end={globalStats?.total24hVolume * inRealCurrency}
                  duration={5}
                />
              </Title>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Top Crypto Currencies</Title>
      </div>

      <CryptoCurrencies simplified/>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Top latest Crypto Stories</Title>
      </div>

      <News simplified/>
   
      
    </>
  )
}

export default HomePage
