import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import {Card, Row, Col, Input} from 'antd'

import { useGetCryptosQuery } from '../../Services/cryptoApi'
import Spinner from '../spinner'


const CryptoCurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count);

  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, SetSearchTerm] = useState('');

  useEffect(() => {

    const filteredData = cryptosList?.data?.coins.filter(coin => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm])

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
      
      <Row gutter={[32, 32]} className="crypto-card-container">
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
      </Row>
    </>
  )
}

export default CryptoCurrencies
