
import React from 'react'
import PropTypes from 'prop-types'
import './individualGraph.css'

const IndividualGraph = ({graph: {name, graphPic}}) => {
  return (
    <div className="data-card-container">
        <div className='data-banner pb1'>
     <span className='t-medium bold'>{name}</span> 

    
</div>
<hr />
<div className="data-info-section pt1">
  
  <div className="data-graph">
    <img src={graphPic} alt="" />
    
  </div>
</div>
        </div>
  )
}

IndividualGraph.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    
    profile: PropTypes.object.isRequired
  }

export default IndividualGraph