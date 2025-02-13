import React from 'react'
import '../Dashboard/dashboard_styles/dashboard-view.css'
import { MdStars } from "react-icons/md";
import { BiPurchaseTag } from "react-icons/bi";
import { SiBeatstars } from "react-icons/si";
import { BsStars } from "react-icons/bs";
import { Legend } from 'recharts';
import Dashboard_chart from './dashboard_chart';
import { useState } from 'react';
import DashboardChart from './dashboard_chart';
import CustomPieChart from '../Dashboard/CustomPieChart'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, LineChart, Area } from 'recharts';


function DashboardView()  {

  const [showChart, setShowChart] = useState(false); // State to toggle visibility
  // Function to toggle the chart
  const viewChart = () => {
    setShowChart(!showChart);
  };

  //Use states for pie charts

  const[showPieChart, setShowPieChart] = useState(false); // State to toggle visibility
  //function to toggle the pie chart

  const viewPieChart = () => {
    console.log("Pie chart clicked");
    setShowPieChart(!showPieChart);
  };


  //An array of cards to display
  const arrayCards=[
    {
      title:'Sales',
      value: 1200,
      text:'total for this month'
    },
    {
      title:'Purshases',
      value: 1200,
      text:'total for this month'
    },
    {
      title:'Returns',
      value: 1200,
      text:'total for this month'
    },
    {
      title:'Losses',
      value: 3000,
      text:'total for this month'
    },

  ]

  //An array that contains chart information
  const customersData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 600 },
    { name: 'Mar', value: 800 },
    { name: 'Apr', value: 700 },
    { name: 'May', value: 1000 },
    { name: 'Jun', value: 1200 },
  ];
  
  const conversionData = [
    { name: 'Jan', value: 500 },
    { name: 'Feb', value: 400 },
    { name: 'Mar', value: 700 },
    { name: 'Apr', value: 900 },
    { name: 'May', value: 800 },
    { name: 'Jun', value: 950 },
  ];
  
  const revenueData = [
    { name: 'Jan', value: 300 },
    { name: 'Feb', value: 500 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 700 },
    { name: 'May', value: 900 },
    { name: 'Jun', value: 1000 },
  ];

// Generate sine-wave-like data dynamically
const monthlyRevenue = Array.from({ length: 12 }, (_, i) => ({
  month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i],
  onlineRevenue: Math.sin(i * 0.6) * 200 + 700, // Adjust wave height
  offlineRevenue: Math.cos(i * 0.6) * 300 + 800, // Shift & amplify wave
}));

//Array for line charts
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];  
  return (
    <div className='view-container'>

      <div className='array-container'>
        {arrayCards.map((item)=>(
          <div className='array-elements'>
            <div className={`array-cards ${
              item.title==='Sales'? 'color-chooser':
              item.title==='Purshases'? 'color-chooser1':
              item.title==='Returns'? 'color-chooser2':
              'color-chooser3'}`}>
                <div className='icon-container'>
                  {item.title==='Sales'? <MdStars className='sales-icon'/>:
                  item.title==='Purshases'? <BiPurchaseTag className='purchase-icon'/>:
                  item.title==='Returns'? <SiBeatstars className='returns-icon' />:
                  <BsStars className='loss-icon'/>
                  }
                </div>
                <div className='item-title'>{item.title}</div>
              <div>{item.value}</div>
              <div>{item.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="dashboard-container">
    {/* Customers Card */}
    <div className="dashboard-card">
      <h3>Customers</h3>
      <p>Total customers this month</p>
      <h1>92,556</h1>
      <p className="increase">1.35% ↑ More than last month</p>
      <ResponsiveContainer width={260} height={70}>
        <BarChart data={customersData}>
          <Bar dataKey="value" fill="purple" />
        </BarChart>
      </ResponsiveContainer>
    </div>

    {/* Products Card */}
    <div className="dashboard-card">
      <h3>Products</h3>
      <p >Total conversion this month</p>
      <h1>53,812</h1>
      <p className="decrease">0.17% ↓ Less than last month</p>
      <ResponsiveContainer width={260} height={80}>
      <AreaChart data={conversionData}className='area-graph'>
      <defs>
        <linearGradient id="colorWave" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="gold" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="orange" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <Area 
        type="monotone" 
        dataKey="value" 
        stroke="orange" 
        fill="url(#colorWave)" 
      />
    </AreaChart>
      </ResponsiveContainer>
    </div>

    {/* Purchases Card */}
    <div className="dashboard-card"> 
      <h3>Purchases</h3>
      <p>Total purchases this month</p>
      <h1>40,008</h1>
      <p className="increase">0.06% ↑ Less than last month</p>
      <ResponsiveContainer width={260} height={80}>
        <AreaChart data={revenueData}>
          <Area dataKey="value" stroke="red" fill="pink" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
  {/** This is a line graph that displays the revenue monthly*/}
  <p onClick={viewChart} className='chart-title'>
      Monthly revenue
      </p>

      {showChart && <DashboardChart />}
  {/**This is a pie chart that shows data for sales */}
  <p onClick={viewPieChart} className='piechart-title'> 
  Sales
  </p>
  {showPieChart && <CustomPieChart/>}
    </div>
  )
}

export default DashboardView