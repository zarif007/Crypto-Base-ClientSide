import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2';



const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName, coinColor }) => {
  const coinPrice = [];
  const coinTimestamp = [];


  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        pointRadius: 1,
        fill: false,
        backgroundColor: coinColor,
        borderColor: coinColor,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };


  return (
    <>
      <Card>
        <Row className="chart-header">
          <Title level={2} className="chart-title">{coinName} Price Chart </Title>
          <Col className="price-container">
            {
              coinHistory?.data?.change < 0 ? <Title level={5} className="price-change">Change: <span style={{color: 'red'}}>{coinHistory?.data?.change}%</span></Title> :
              <Title level={5} className="price-change">Change: <span style={{color: 'green'}}>+{coinHistory?.data?.change}%</span></Title>
            }
            <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
          </Col>
        </Row>
      </Card>
      <Card>
        <Line data={data} options={options} />
      </Card>
    </>
  );
};

export default LineChart;