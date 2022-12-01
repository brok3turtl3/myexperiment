import React from 'react'

import './landing.css'

const Landing = () => {
  return (
    <div className='landing-container'>
        <setion className="question-section mt2">
<div className="question-container mt1 ml1">
    <p className="t-large mb1 p1"><span className='t-large bold'>The Question:</span> Is 50 too late to make significant life changes?</p>
    <hr></hr>
    <p className='t-normal mt1 p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada augue id rutrum mollis. Morbi ut odio in tellus laoreet dignissim. Morbi ut erat in sem pharetra scelerisque maximus eu ante. Quisque accumsan urna pretium dolor iaculis finibus. Aliquam erat volutpat.</p>
</div>
<div className="stats-container p1">
    <ul className="t-large">
        <li className="t-medium mb1 p1">The average Canadian watches 21 hours of TV a week.</li>
        <li className="t-medium mb1 p1">The average Canadian generates 5.4lbs of garbage a day.</li>
        <li className="t-medium p1">Over 99% of Canadians are considered literate.</li>
    </ul>
</div>
</setion>

<section className='hypothesis-section mt2'>
<div className="hypothesis-container">
    <p className="t-large mb1 p1"><span className='t-large bold'>Prediction:</span> I believe I can radically change my career along with my mental and physical health.</p>
    <hr></hr>
    <p className='t-normal mt1 p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada augue id rutrum mollis. Morbi ut odio in tellus laoreet dignissim. Morbi ut erat in sem pharetra scelerisque maximus eu ante. Quisque accumsan urna pretium dolor iaculis finibus. Aliquam erat volutpat.</p>
</div>
</section>

<section className='purpose-section mt2'>
<div className="purpose-container">
    <p className="t-large bold mb1 p1">Follow me on my journey - Time to get the data!</p>
    <hr></hr>
    <p className='t-normal mt1 p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada augue id rutrum mollis. Morbi ut odio in tellus laoreet dignissim. Morbi ut erat in sem pharetra scelerisque maximus eu ante. Quisque accumsan urna pretium dolor iaculis finibus. Aliquam erat volutpat.</p>
</div>
</section>
    </div>
  )
}

export default Landing