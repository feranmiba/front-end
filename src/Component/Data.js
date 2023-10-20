import React from 'react'
import {LineChart} from '@mui/x-charts/LineChart'

function Data() {
  return (
    <div>
    <LineChart
    xAxis={[{ data: [0, 7.5, 11.5, 14.5, 16.5, 19.5] }]}
    series={[
      {
        data: [15, 50, 18.8, 38, 45, 38],
        area: true
      },
    ]}
    width={600}
    height={350}
    area= 'true'
  />
    </div>
  )
}

export default Data
