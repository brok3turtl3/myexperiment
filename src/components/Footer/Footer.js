import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <span className=" copywrite t-medium beige pl1">&copy; 2022 Sean Kelly</span>
    <span className='contacts t-medium beige pr1'>

    <a href="https://twitter.com/brok3turtl3" target="_blank" rel="noreferrer"><img height="50px" className=" twitter beige" src="./images/twitter.png" alt="" />Twitter</a>

    </span>
    </div>
  )
}

export default Footer