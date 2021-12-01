import React from 'react'
import {Spin, Space} from 'antd'

const Spinner = () => {
  return (
    <>
    <Space size="middle">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
    </Space>
    </>
  )
}

export default Spinner
