import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import {Card, Input, Avatar, Table, Button, Row, Col} from 'antd'

import { useGetCryptosQuery } from '../../Services/cryptoApi'
import Spinner from '../spinner'
import { useSelector } from 'react-redux'
import realCurrencyStats from '../../realCurrencyStats'


const CryptoCurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count);

  const realCurrency = useSelector(state => state.realCurrency.value);

  const inRealCurrency = realCurrencyStats[realCurrency][0];

  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, SetSearchTerm] = useState('');


  let columns = [
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
        return <div><b>{millify(price * inRealCurrency)} {realCurrency}</b></div>
      }
    },
    {
      title: 'Change',
      dataIndex: 'change',
      key: 'key',
      render: change => {
        return (
          change >= 0 ? <div style={{color: 'green'}}><b>+{millify(change)} %</b></div> :
          <div style={{color: 'red'}}><b>{millify(change)} %</b></div>
        )
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
      
      <Card>
        <Table 
          dataSource={cryptos}
          columns={columns}
          pagination={{defaultPageSize: 100}}
        ></Table>
      </Card>
      
    </>
  )
}

export default CryptoCurrencies
