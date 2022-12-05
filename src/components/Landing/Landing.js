import React from 'react'
import Footer from '../Footer/Footer'
import './landing.css'

const Landing = () => {
  return (
    <div className='landing-container'>
        <setion className="question-section mt2 mb2">
<div className="question-container mt1 ml1">
    <p className="t-large mb1 p1"><span className='t-large bold'>The Question:</span> When is it too late to make significant life changes?</p>
    <hr></hr>
    <p className='t-normal mt1 p1'>The quick answer is NEVER!! But in reality this is a tough question and the answer could vary from person to person. Once we are "middle-aged" it can be dificult to unwind decades of habits that keep us in a rut with our health and professional endeavors. How much can I change my life in one year? Can I rebuild my health habits and move to a new carreer in a completely different field?</p>
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
        <li className="t-medium p1">The average age of a web developer is 36 and were hired much younger than that (USA).</li>
        <li className="t-medium p1">Roughly 3/4 of Canadians will experience stress related physical and/or mental health issues.</li>
    </ul>
</div>
</section>

<section className='hypothesis-section mt2'>
<div className="question-image">
    <img src="../images/youngman.png" alt="" />
</div>
<div className="hypothesis-container">
    <p className="t-large mb1 p1"><span className='t-large bold'>Prediction:</span> I believe, in less than a year, I can radically improve my mental and physical health while transitioning to a new career in web development.</p>
    <hr></hr>
    <p className='t-normal mt1 p1'>I believe that I can make significant improvements in my overall physical and mental health as well as obtain employemt and start a new career in a technically challenging field. Applying consistent effort to structured daily routines and monitoring will produce compound effects over time and impressive, life changing, results.</p>
</div>
</section>

<section className='purpose-section mt2'>
<div className="purpose-container ml1">
    <p className="t-large bold mb1 p1">Follow my journey - Time to get the data!</p>
    <hr></hr>
    <p className='t-normal mt1 p1'>Well... "Walk the walk or stfu" is the saying I believe! I am going to hold myself as publicly accountable throughout this experiment as possible. I will be writing in the Updates section about the wins (and inevitable losses) that I go through each week. Any experiment is only as good as the data that is collected and how it is measured. To this end I will also outline all the metrics I will use to measure success and provide weekly visual updates in the Data section.</p>
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