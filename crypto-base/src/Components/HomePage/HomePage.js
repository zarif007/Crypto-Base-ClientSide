import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic, Card } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../../Services/cryptoApi';
import { CryptoCurrencies, News } from '..';
import Spinner from '../spinner';


const {Title} = Typography;

const HomePage = () => {
  
  const {data, isfetching} = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;


  if(isfetching) return <Spinner/>



  return (
    <>
      
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      {/* <Row>
        <Col span={12}><Statistic title='Total CryptoCurrencies' value={globalStats?.total}></Statistic></Col>
        <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats?.totalExchanges || 0)}></Statistic></Col>
        <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats?.totalMarketCap || 0)}></Statistic></Col>
        <Col span={12}><Statistic title='Total 24H Volume' value={millify(globalStats?.total24hVolume || 0)}></Statistic></Col>
        <Col span={12}><Statistic title='Total Markets' value={millify(globalStats?.totalMarkets || 0)}></Statistic></Col>
      </Row> */}

      <div className="site-card-wrapper" style={{textAlign: 'center'}}>
        <Row gutter={16}>
          <Col span={6}>
            <Card title="Total CryptoCurrencies" bordered={true}>
              <Title>{millify(globalStats?.total)}</Title>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Total Exchanges" bordered={true}>
              <Title>{millify(globalStats?.totalExchanges || 0)}</Title>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Total Market Cap" bordered={true}>
              <Title>{millify(globalStats?.totalMarketCap || 0)}</Title>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Total 24H Volume" bordered={true}>
              <Title>{millify(globalStats?.total24hVolume || 0)}</Title>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Crypto Currencies</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>

      <CryptoCurrencies simplified/>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>

      <News simplified/>
   
      
    </>
  )
}

export default HomePage
