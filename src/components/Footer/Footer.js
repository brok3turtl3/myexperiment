import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>

      <div className='copywrite'>
      <span className="t-medium beige pl1">&copy; 2022 Sean Kelly</span>
      </div>
<div className='twitter'>
    <a href="https://twitter.com/brok3turtl3" target="_blank" rel="noreferrer"><span className='t-medium'>Follow me on Twitter</span><i class="fa-brands fa-twitter pl1"></i></a>
</div>
    
<div className='mail pr1'>
    <a href="mailto:brok3turtl3@gmail.com">
                <span className="mail beige t-medium">Contact Me</span><i className="fa-regular fa-envelope beige medium pl1"></i></a></div>


    
    </div>
  )
}

export default Footer