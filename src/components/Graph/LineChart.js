import React  from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Mar',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Jun',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Aug',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Sep',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Nov',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Dec',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];



function LineCharts() {

    return (
        <>
             {/* Card Header - Dropdown */}
             <div
                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                        <div class="dropdown no-arrow">
                            <a class="dropdown-toggle" href="#/" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                aria-labelledby="dropdownMenuLink">
                                <div class="dropdown-header">Dropdown Header:</div>
                                <a class="dropdown-item" href="#/">Action</a>
                                <a class="dropdown-item" href="#/">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#/">Something else here</a>
                            </div>
                        </div>
                    </div>
                    {/* Card Body */}
             
                    <div class="card-body chart-area">

                    <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>

                            
                    </div>
        </>
    )
}

export default LineCharts
