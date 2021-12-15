import React, { useState } from 'react'
import { Typography, Select, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../../Services/cryptoNewsApi';
import { useGetCryptosQuery } from '../../Services/cryptoApi';
import Spinner from '../spinner';


const {Text, Title} = Typography;
const {Option} = Select;

const demoImg = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({simplified}) => {

  const [newsCategory, setnewsCategory] = useState('Cryptocurrency');

  const {data: cryptoNews, isFetching} = useGetCryptoNewsQuery({newsCategory, count: simplified ? 6: 12})
  
  const {data} = useGetCryptosQuery(100);

  if(isFetching) return <Spinner/>

  return (
    <Card>
      <Row gutter={[24, 24]}>
        {
          !simplified && (
            <Col span={24}>
              <Select
                showSearch
                className="select-news"
                placeholder="Select a Crypto specific news"
                optionFilterProp="children"
                onChange={value => setnewsCategory(value)}
                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase())}
              >
                <Option value="Cryptocurrency">Cryptocurrency</Option>
                {
                  data?.data?.coins.map(coin => <Option value={coin.name}>{coin.name}</Option>)
                }
              </Select>
            </Col>
          )
        }
        {
          cryptoNews?.value.map((news, i) => (
            <Col xs={24} sm={12} lg={12} key={i}>
              <Card hoverable className="news-card">
                <a href={news.url} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                    <Title className="news-title" level={4}>{news.name}</Title>
                    <img src={news?.image?.thumbnail?.contentUrl || demoImg} />
                  </div>
                  <p>
                    {
                      news.description > 100 ? `${news.description.substring(0, 100)}..` :
                      news.description
                    }
                  </p>
                  <div className="provider-container">
                    <div>
                      <Avatar src={news?.provider[0]?.image?.thumbnail?.contentUrl || demoImg} />
                      <Text className="provider-name">{news.provider[0]?.name}</Text>
                    </div>
                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                  </div>
                </a>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Card>
  )
}

export default News
