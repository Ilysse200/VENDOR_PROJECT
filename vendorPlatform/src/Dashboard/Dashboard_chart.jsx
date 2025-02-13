import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { useState } from "react";
import '../Dashboard/dashboard_styles/revenueChart.css'

// Sample Data
const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];


const DashboardChart = () => {

  
  return (
    <div className="revenue-chart">
      {/* Only show chart when showChart is true */}
      <div className="chart-container">
        <ResponsiveContainer height={250} width={500}>
          <p className="graph-identifier">Sales perfomance for 30 days</p>
          <LineChart data={data} margin={{ left:18 ,right: 30, top: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            <Tooltip /> {/* Optional, but useful */}
            <Legend
            verticalAlign="top"
            align="right"
            iconSize={12}
            iconType="square"
            wrapperStyle={
              {
              top: 0,
              right: 10,
              fontSize: "14px",
              color: "#666",
              fontWeight: "bold"
              }
            }
            /> {/* ✅ Add the Legend here */}
          </LineChart>
        </ResponsiveContainer>
    </div>
    </div>
  );
};

export default DashboardChart;
