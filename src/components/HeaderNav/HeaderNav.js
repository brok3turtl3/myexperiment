import React, { useState } from 'react'
import { Link } from 'react-router-dom';


import './headernav.css'

const HeaderNav = () => {



    
  return (
    <div className='header-nav-container'>
        <div className="brand">
            <span className='t-xlarge'>My Experiment</span>
        </div>
        <div className="navigation">
            <ul>
                <li><Link to='/' >Home</Link></li>
                {/* <li><Link to='/blog'>Blog</Link></li> */}
                <li><Link to='/goals'>Goals</Link></li>
                <li><Link to='/updates'>Updates</Link></li>
                <li><Link to='/books' >Books</Link></li>
                <li><Link to='/data'>Data</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default HeaderNav
