import React from 'react'

import data from './graphData/graphData';
import IndividualGraph from './IndividualGraph';

import './data.css';

const Data = () => {
  return (
    <div className="data-container" style={{ backgroundImage: "url(./images/chalkboard.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
      <div className="data-overlay">
        <div className="data-inner">

      <div className="data-intro-container pt2">
      <p className='data-intro pt2 t-medium'>Once a week I will update the data in this section and continue to expand on the data being provided.</p>
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