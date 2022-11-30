import React from 'react'

import './landing.css'

const Landing = () => {
  return (
    <div className='landing-container'>
        <setion className="question-section">
<div className="question-container">
    <p className="t-large mb1 p1">The Question: Is 50 too late to make significant life changes?</p>
    <hr></hr>
    <p className='t-normal mt1 p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada augue id rutrum mollis. Morbi ut odio in tellus laoreet dignissim. Morbi ut erat in sem pharetra scelerisque maximus eu ante. Quisque accumsan urna pretium dolor iaculis finibus. Aliquam erat volutpat.</p>
</div>
<div className="stats-container">
    <ul className="t-large">
        <li className="t-large mb1">50% of ....</li>
        <li className="t-large mb1">28% of ....</li>
        <li className="t-large">1% of</li>
    </ul>
</div>
</setion>

<div className="hypothesis-container">
    <p className="t-large mb1 p1">Prediction: I believe that it is not only possible but advisable.</p>
    <hr></hr>
    <p className='t-normal mt1 p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada augue id rutrum mollis. Morbi ut odio in tellus laoreet dignissim. Morbi ut erat in sem pharetra scelerisque maximus eu ante. Quisque accumsan urna pretium dolor iaculis finibus. Aliquam erat volutpat.</p>
</div>

<div className="purpose-container">
    <p className="t-large mb1 p1">Time to get the data!</p>
    <hr></hr>
    <p className='t-normal mt1 p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada augue id rutrum mollis. Morbi ut odio in tellus laoreet dignissim. Morbi ut erat in sem pharetra scelerisque maximus eu ante. Quisque accumsan urna pretium dolor iaculis finibus. Aliquam erat volutpat.</p>
</div>
    </div>
  )
}

export default Landing