import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import {Card, Row, Col, Input, Avatar, Typography, Collapse, Table, Button} from 'antd'

import { useGetCryptosQuery } from '../../Services/cryptoApi'
import Spinner from '../spinner'
import HTMLReactParser from 'html-react-parser'

const { Text } = Typography;
const { Panel } = Collapse;

const CryptoCurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count);

  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, SetSearchTerm] = useState('');

  

  

  const columns = [
    {
      title: 'Logo',
      dataIndex: 'iconUrl',
      key: 'key',
      render: iconUrl => {
        return <Avatar src={iconUrl} size={30}/>
      }
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'key',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'key',
      sorter: (a, b) => a.price - b.price,
      render: price => {
        return <div><b>{millify(price)} USD</b></div>
      }
    },
    {
      title: 'Details',
      dataIndex: 'id',
      key: 'key',
      render: id => {
        return <Link to={`/crypto/${id}`}><Button type="primary">View</Button></Link>
      }
    },
  ]

  useEffect(() => {

    const filteredData = cryptosList?.data?.coins.filter(coin => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm])

  console.log(cryptos);

  if(isFetching) return <Spinner/>

  return (
    <>
      {
        !simplified && (
          <div className="search-crypto">
            <Input placeholder="Search Crypto Currency" onChange={e => SetSearchTerm(e.target.value)} />
          </div>
        )
      }
      
      {/* <Row gutter={[32, 32]} className="crypto-card-container">
        {
          cryptos?.map((crypto) => (
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.id}>
              <Link to={`/crypto/${crypto.id}`}>
                <Card 
                  title={`${crypto.rank}. ${crypto.name}`}
                  extra={<img src={crypto.iconUrl} className="crypto-image"/>}
                  hoverable
                >
                  <p>Price: {millify(crypto.price)}</p>
                  <p>market Cap: {millify(crypto.marketCap)}</p>
                  <p>Daily Change: {millify(crypto.change)}</p>

                </Card>
              </Link>
            </Col>
          ))
        }
      </Row> */}

      <Table 
        dataSource={cryptos}
        columns={columns}
        pagination={{defaultPageSize: 100}}
      ></Table>

      
    </>
  )
}

export default CryptoCurrencies
