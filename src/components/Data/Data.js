import React from 'react'

import data from './graphData/graphData';
import IndividualGraph from './IndividualGraph';

import './data.css';

const Data = () => {
  return (
    <div className="data-container">
      <div className="data-overlay">
        <div className="data-inner">

      <div className="data-intro-container pt2">
      <p className='data-intro pt2 t-medium'>Once a week I will post a summary of my week's wins and losses. I am sure there will be ups and downs and hopefully sharing them will help keep things in context for me and really show everyone else what the journey was actually like!</p>
        </div>

        {data.map((graph, index) => {
          return <IndividualGraph key={index} graph={graph}/>
        })}
        
        
        
        
        
        </div>
        </div>
        </div>
  )
}

export default Data