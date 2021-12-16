import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic, Card } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../../Services/cryptoApi';
import { CryptoCurrencies, News } from '..';
import Spinner from '../spinner';
import CountUp from 'react-countup';

const {Title} = Typography;

const HomePage = () => {
  
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
            <Card title="Total Market Cap (USD)" bordered={true}>
              <Title level={2}>
                <CountUp
                  start={0}
                  end={globalStats?.totalMarketCap}
                  duration={5}
                />
              </Title>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card title="Total 24H Volume (USD)" bordered={true}>
              <Title level={2}>
                <CountUp
                  start={0}
                  end={globalStats?.total24hVolume}
                  duration={5}
                />
              </Title>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Top Crypto Currencies</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>

      <CryptoCurrencies simplified/>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Top latest Crypto Stories</Title>
        <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>

      <News simplified/>
   
      
    </>
  )
}

export default HomePage
