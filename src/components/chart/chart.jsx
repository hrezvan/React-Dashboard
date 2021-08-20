import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { userData } from '../../data';
import './chart.css';

function Chart(title , data , dataKey , grid) {

    // const data = [
    //     {
    //       name: 'Jan',
    //       'Active User': 4000,
    //     },
    //     {
    //       name: 'Feb',
    //       'Active User': 3000,
    //     },
    //     {
    //       name: 'Mar',
    //       'Active User': 2000,
    //     },
    //     {
    //       name: 'Apr',
    //       'Active User': 2780,
    //     },
    //     {
    //       name: 'May',
    //       'Active User': 1890,
    //     },
    //     {
    //       name: 'Jun',
    //       'Active User': 2390,
    //     },
    //     {
    //       name: 'Jul',
    //       'Active User': 3490,
    //     },
    //     {
    //         name: 'Agu',
    //         'Active User': 1790,
    //     },
    //     {
    //         name: 'Sep',
    //         'Active User': 3890,
    //     },
    //     {
    //         name: 'Oct',
    //         'Active User': 2290,
    //     },
    //     {
    //         name: 'Nov',
    //         'Active User': 2990,
    //     },
    //     {
    //         name: 'Dec',
    //         'Active User': 4190,
    //     },
    // ];


    return (
        <div className='chart'>
            <h3 className="chartTitle">User Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart
                    width={500}
                    height={300}
                    data={userData}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                    }}
                >
                    {grid && <CartesianGrid strokeDasharray="5 5" />}    
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey='Active User' stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
