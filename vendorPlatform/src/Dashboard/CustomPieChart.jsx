import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import '../Dashboard/dashboard_styles/customPieChart.css';

// Sample Data
const data01 = [
  { name: "January", value: 400 },
  { name: "February", value: 300 },
  { name: "March", value: 300 },
  { name: "May", value: 200 },
];

const COLORS = ["#00C0EF", "#36A2EB", "#6A0DAD"]; // Custom colors for slices

function CustomPieChart() {
  return (
    <div className='pie-container'>
      <div style={{ textAlign: "center", marginTop:"0rem", marginLeft: "54rem", marginBottom:"100rem", position:"absolute" }}>
        <h3>Pie Chart Example</h3>
        <ResponsiveContainer width={200} height={250}>
          <PieChart>
            <Tooltip />
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            >
              {data01.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CustomPieChart;
