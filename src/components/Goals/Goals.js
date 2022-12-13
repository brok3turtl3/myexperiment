import React from 'react'
import './goals.css';

const Goals = () => {
  return (
    <div className="goals-container">
      <div className="goals-overlay">
        <div className="goals-inner">
        <div className="goals-card">
            <p className="t-medium center bold mb1">How Do I Measure Success?</p>
            <p className='mb1'>I am tracking 40+ data points throughout my experiment. The table below contains the ones I will be using to judge the overall success of my efforts. I have included starting values for each(including a date if I started tracking after the experiment started) and a target value or goal.</p>
            <hr />

            
            <div className="table">
                <div className="metrics">
                    <p className="head">Metric</p>
                    <p className='cell'>Weight</p>
                    <p className='cell'>Body Fat<span className='bold t-small'> (Dec. 8th)</span></p>
                    <p className='cell'>Push Ups<span className='t-small'>(one continuous set)</span></p>
                    <p className='cell'>Burpees<span className='t-small'>(one continuous set)</span></p>
                    <p className='cell'>Breath Hold</p>
                    <p className='cell'>Run<span className='t-small'>(Distance in 30min)</span><span className='bold t-small'> (Dec. 8th)</span></p>
                    <p className='cell'>Resting Heart Rate</p>
                    <p className='cell'>Meditation<span className='t-small'>(Hours per week)</span></p>
                    <p className='cell'>Yoga<span className='t-small'>(Hours per week)</span></p>
                    <p className='cell'>Books Read</p>
                    <p className='cell'>Web Projects Built</p>
                    <p className='cell'>Github PR Merges</p>
                    <p className='cell'>Employed in Web Dev</p>
                </div>
                <div className="stats">
                <div className="start">
                <p className="head">Start</p>
                    <p className='cell'>263lbs</p>
                    <p className='cell'>33%</p>
                    <p className='cell'>15</p>
                    <p className='cell'>7</p>
                    <p className='cell'>1:16</p>
                    <p className='cell'>2.1km</p>
                    <p className='cell'>76bpm</p>
                    <p className='cell'>30min</p>
                    <p className='cell'>0</p>
                    <p className='cell'>0</p>
                    <p className='cell'>0</p>
                    <p className='cell'>0</p>
                    <p className='cell'>n/a</p>
                </div>
                <div className="goal">
                <p className="head">Goal</p>
                    <p className='cell'>&#60;225lbs</p>
                    <p className='cell'>&#60;20%</p>
                    <p className='cell'>100</p>
                    <p className='cell'>50</p>
                    <p className='cell'>4min</p>
                    <p className='cell'>5km</p>
                    <p className='cell'>60bpm</p>
                    <p className='cell'>2hrs</p>
                    <p className='cell'>2hrs</p>
                    <p className='cell'>50</p>
                    <p className='cell'>12</p>
                    <p className='cell'>10</p>
                    <p className='cell'>Yes</p>
                </div>
                </div>
            </div>

            <hr />
            <p className="t-medium center bold  mb1 mt1">Notes On Daily Routines And Strategies</p>
            <p>This information will more than likely change a fair amount over time but I want to give everyone an overview of how I am tackling certain areas and the methods I am using. For example, when I began, I made some very broad and basic dieting rules to get things started. I believe shortly after Chrismas I will be tightening up that part of my regime. I may go full Keto.</p>
                <br /> 
                <p>I think having this section to add context to the data I am posting will be helpful for people. I also want people to have a general idea of the level of effort and time that went in to certain things to make the gains. Sometimes we all think it takes a lot more effort than it actually does!</p>
                <br />
                <hr />
                
                <p className="t-medium bold  mb1 mt1">Diet:</p>
                <p>I kept this super simple to start. The basis for any fitness overhaul starts with the diet. Here are the loose guidelines I will start with:</p>
                <br />
                <div className='list'>
                <ul>
                    <li>Between 1500-1800 calories per day.</li>
                    <li>Low carbs - Significantly reduce carb intake and eliminate processed sugars</li>
                    <li>Intermitent Fasting - All meals between 11am and 7pm</li>
                </ul>
                </div>
                <br />
                <p className="t-medium bold  mb1 mt1">Exercise:</p>
                <p>As with the diet, very simple to start. Once my diet is inline I will add and adjust exercises and routines. Here is how I will start:</p>
                <br />
                <div className='list'>
                <ul>
                    <li>Daily push ups or burpees (1 set to failure)</li>
                    <li>Light treadmill cardio (30min 3 to 4 times a week on empty stomach)</li>
                    <li>Daily Air squats (1 set to failure)</li>
                </ul>
                </div>
                <br />
                <p className="t-medium bold  mb1 mt1">Daily Morning Routine:</p>
                <p>I believe a good start in the morning is crucial to ensuring a successful day. I get up EARLY! I am typically out of bed by 4am. This usually gives me 6.5 to 7hrs of sleep. As soon as I am up I start the coffee and get going! It usually takes 25-30 min. I complete these things in this order, with very few exceptions:</p>
                <br />
                <div className='list'>
                <ul>
                    <li>Light stretching (5min - major muscles)</li>
                    <li>Push Ups or Burpees (1min - 1 set to failure)</li>
                    <li>Meditate (10min)</li>
                    <li>Journaling (10-15min)</li>
                </ul>
                </div>
                <br />
                <p className="t-medium bold  mb1 mt1">Reading:</p>
<p> I will be using a combination of physical and audio for this. I plan on spending 30min minimum (usually at nights) with a physical book and the then filling in with audio throughout the day. The audio lets me double up activities like doing my cardio while I listen to a book. The audio medium also allows me to speed up the intake. 1.25x to 1.5x depending on the material. </p>



        </div>
            </div>
            </div>
            </div>
  )
}

export default Goals