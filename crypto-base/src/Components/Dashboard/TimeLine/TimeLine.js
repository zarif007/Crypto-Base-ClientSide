import { Timeline } from 'antd'
import Title from 'antd/lib/typography/Title'
import React from 'react'

const TimeLine = () => {
    return (
        <div className='container'>
          <Title>Time Line</Title>
          <Timeline>
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
              <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
              <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
          </Timeline>
        </div>
    )
}

export default TimeLine
