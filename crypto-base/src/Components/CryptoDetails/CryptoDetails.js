import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select, Avatar, Card, InputNumber, Button } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../../Services/cryptoApi';

import { News } from '..';

import LineChart from './LineChart';
import Spinner from '../spinner';
import { useSelector } from 'react-redux';
import realCurrencyStats from '../../realCurrencyStats';

const {Title, Text} = Typography;
const {Option} = Select;


const CryptoDetails = () => {
  const {coinId} = useParams();

  const [timePeriod, setTimePeriod] = useState('7d');

  const {data, isFetching} = useGetCryptoDetailsQuery(coinId);

  const {data: coinHistory} = useGetCryptoHistoryQuery({coinId, timePeriod});

  const [ammount, setAmmount] = useState(1);


  const cryptoDetails = data?.data?.coin;

  const realCurrency = useSelector(state => state.realCurrency.value);

  const inRealCurrency = realCurrencyStats[realCurrency][0];


  if(isFetching) return <Spinner/>

  let cur = cryptoDetails.name;

  const time = ['24h', '7d', '30d', '1y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high', value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails.approvedSupply ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${millify(cryptoDetails.totalSupply)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails.circulatingSupply)}`, icon: <ExclamationCircleOutlined /> },
  ];


  return (
    <div className='container'>
      <Col className="coin-detail-container">
        <Col className="coin-heading-container">
        <Avatar src={cryptoDetails.iconUrl} size={100}/>
          <Title level={2} className="coin-name">
            {cryptoDetails.name} ({cryptoDetails.slug}) Price:
          </Title>
          <p>
            {cryptoDetails.name} Live price in {realCurrency}<span> </span>
             view value Statistic, market cap and supply 
          </p>
        </Col>
        <Select 
          defaultValue="7d" 
          className="select-timeperiod" 
          placeholder="Select Time Period"
          onChange={(value) => setTimePeriod(value)}
        >
          {
            time.map(date => <Option key={date}>{date}</Option>)
          }
        </Select>

        <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails.price * inRealCurrency)} coinName={cryptoDetails.name} coinColor={cryptoDetails.color}/>

        <Col className="stats-container">
          <Card style={{marginTop: '50px'}}>
            <Col className="coin-value-statistics">
              <Col className="coin-value-statistics-heading">
                <Title level={3} className="coin-details-heading">
                  {cryptoDetails.name} value Statistic
                </Title>
                <p>
                  An overview of {cryptoDetails.name}
                </p>
              </Col>
              {
                stats.map(({icon, title, value}) => (
                  <Col className="coin-stats">
                    <Col className="coin-stats-name">
                      <Text>{icon}</Text>
                      <Text>{title}</Text>
                    </Col>
                    <Text className="stats">{value}</Text>
                  </Col>
                ))
              }
            </Col>
          </Card>

          <Col className="other-stats-info">
            <Card style={{marginTop: '50px'}}>
              <Col className="coin-value-statistics-heading">
                <Title level={3} className="coin-details-heading">
                  Other Coins value Statistic
                </Title>
                <p>
                  An overview of All Coins
                </p>
              </Col>
              {
                genericStats.map(({icon, title, value}) => (
                  <Col className="coin-stats">
                    <Col className="coin-stats-name">
                      <Text>{icon}</Text>
                      <Text>{title}</Text>
                    </Col>
                    <Text className="stats">{value}</Text>
                  </Col>
                ))
              }
            </Card>
          </Col>

          <Col className="other-stats-info">
            <Card style={{marginTop: '50px'}}>
              <Col className="coin-value-statistics-heading">
                <Title level={3} className="coin-details-heading">
                  Purchase {cryptoDetails.name}
                </Title>
                <p>
                  {ammount * cryptoDetails.price * inRealCurrency} <span> </span> {realCurrency}
                </p>
              </Col>
              <InputNumber
                  style={{ width: 300, height: 60, fontSize: 35, marginTop: 20, marginBottom: 20 }}
                  defaultValue="1"
                  min="0"
                  max="100"
                  step="0.00001"
                  onChange={value => setAmmount(value)}
              />  <br/>
              <Button onClick={
                () => console.log([cryptoDetails.name, cryptoDetails.iconUrl, cryptoDetails.slug], ammount, cryptoDetails.price * ammount)
              } type="primary" style={{marginTop: 20, height: 50, width: 300, fontSize: 20}}>BUY</Button>
            </Card>
          </Col>
        </Col>
        <Col className="coin-desc-link">
            <Row className="coin-desc">
              <Card style={{marginTop: '50px'}}>
                <Title level={3} className="coin-details-heading">
                  What is {cryptoDetails.name}
                  {HTMLReactParser(cryptoDetails.description)}
                </Title>
              </Card>
            </Row>
            <Col className="coin-links">
              <Card style={{marginTop: '50px'}}>
                <Title level={3} className="coin-details-heading">
                  {cryptoDetails.name} Links
                </Title>
                {
                  cryptoDetails.links.map(link => (
                    <Row className="coin-link" key={link.url}>
                      <Title level={5} className="link-name">
                        {link.type}
                      </Title>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.name}
                      </a>
                    </Row>
                  ))
                }
              </Card>
            </Col>
        </Col>
      </Col>

      <Card style={{marginTop: '50px'}}>
        <Title level={3} className="coin-details-heading">
          Top Stories of {cryptoDetails.name}
        </Title>
      </Card>
      <News simplified cur={cur}/>
    </div>
  )
}

export default CryptoDetails
