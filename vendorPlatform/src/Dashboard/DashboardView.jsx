import React from 'react'
import '../Dashboard/dashboard_styles/dashboard-view.css'
import { MdStars } from "react-icons/md";
import { BiPurchaseTag } from "react-icons/bi";
import { SiBeatstars } from "react-icons/si";
import { BsStars } from "react-icons/bs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function DashboardView() {
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

  //An array of data of 
  const chartData = [
    { name: 'Sales', value: 1200 },
    { name: 'Purchases', value: 1200 },
    { name: 'Returns', value: 1200 },
    { name: 'Losses', value: 3000 },
  ];
  return (
    <div>

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
                {/* {item.title}</div> */}
              <div>{item.value}</div>
              <div>{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardView