import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../../Services/cryptoApi';
import { CryptoCurrencies, News } from '..';

const {Title} = Typography;

const HomePage = () => {
  
  const {data, isfetching} = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;


  if(isfetching) return 'Loading...';



  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title='Total CryptoCurrencies' value={globalStats?.total}></Statistic></Col>
        <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats?.totalExchanges || 0)}></Statistic></Col>
        <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats?.totalMarketCap || 0)}></Statistic></Col>
        <Col span={12}><Statistic title='Total 24H Volume' value={millify(globalStats?.total24hVolume || 0)}></Statistic></Col>
        <Col span={12}><Statistic title='Total Markets' value={millify(globalStats?.totalMarkets || 0)}></Statistic></Col>
      </Row>
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
