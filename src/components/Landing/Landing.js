import React from 'react'
import Footer from '../Footer/Footer'
import './landing.css'

const Landing = () => {
  return (
    <div className='landing-container'>
        <setion className="question-section mt2">
<div className="question-container mt1 ml1">
    <p className="t-large mb1 p1"><span className='t-large bold'>The Question:</span> When is it too late to make significant life changes?</p>
    <hr></hr>
    <p className='t-normal mt1 p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada augue id rutrum mollis. Morbi ut odio in tellus laoreet dignissim. Morbi ut erat in sem pharetra scelerisque maximus eu ante. Quisque accumsan urna pretium dolor iaculis finibus. Aliquam erat volutpat.</p>
</div>
<div className="question-image">
    <img src="../images/oldmanthinking.jpg" alt="" />
</div>

</setion>
<section className='stats-section'>
<div className="stats-container p1">
    <ul className="t-large">
        <li className="t-medium p1">Canadians read an average of 12 books a year. (most common answer being 4)</li>
        <li className="t-medium p1">In 2021 64.7% of Canadians where reported as overweight or obese.</li>
        <li className="t-medium p1">The average age of a web developer is 36 and were hired younger than that (USA).</li>
        <li className="t-medium p1">Roughly 3/4 of Canadians will experience stress related health and/or mental issues.</li>
    </ul>
</div>
</section>

<section className='hypothesis-section mt2'>
<div className="question-image">
    <img src="../images/youngman.png" alt="" />
</div>
<div className="hypothesis-container">
    <p className="t-large mb1 p1"><span className='t-large bold'>Prediction:</span> I believe I can radically change my career along with my mental and physical health.</p>
    <hr></hr>
    <p className='t-normal mt1 p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada augue id rutrum mollis. Morbi ut odio in tellus laoreet dignissim. Morbi ut erat in sem pharetra scelerisque maximus eu ante. Quisque accumsan urna pretium dolor iaculis finibus. Aliquam erat volutpat.</p>
</div>
</section>

<section className='purpose-section mt2'>
<div className="purpose-container ml1">
    <p className="t-large bold mb1 p1">Follow me on my journey - Time to get the data!</p>
    <hr></hr>
    <p className='t-normal mt1 p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada augue id rutrum mollis. Morbi ut odio in tellus laoreet dignissim. Morbi ut erat in sem pharetra scelerisque maximus eu ante. Quisque accumsan urna pretium dolor iaculis finibus. Aliquam erat volutpat.</p>
</div>
<div className="question-image">
    <img src="../images/manworking.png" alt="" />
</div>
</section>
<Footer />
    </div>
  )
}

export default Landing