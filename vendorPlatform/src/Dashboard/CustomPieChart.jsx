import React from 'react'
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from "recharts";
import '../Dashboard/dashboard_styles/customPieChart.css'

// Sample Data
const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const data02 = [
  { name: "Category A", value: 240 },
  { name: "Category B", value: 456 },
  { name: "Category C", value: 139 },
  { name: "Category D", value: 980 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]; // Custom colors for slices

function CustomPieChart() {
  return (
    <div className='pie-container'>
    <div style={{ textAlign: "center", marginTop:"0rem", marginLeft: "54rem", marginBottom:"100rem", position:"absolute"}}>
      <h3>Pie Chart Example</h3>
      <ResponsiveContainer width={200} height={250}>
        <PieChart>
          <Tooltip />
          {/* <Legend verticalAlign="bottom" align="center" /> */}

          {/* First Pie Chart - Outer Layer */}
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={70}
            fill="#8884d8"
          >
            {data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          {/* Second Pie Chart - Inner Layer */}
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={100}
            fill="#82ca9d"
            label
          >
            {data02.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
}

export default CustomPieChart