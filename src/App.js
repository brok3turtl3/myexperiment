import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HeaderNav from './components/HeaderNav/HeaderNav'

import './app.css';
import './components/HeaderNav/HeaderNav'
import Landing from './components/Landing/Landing';
import Books from './components/Books/Books';

const App =() => {
  return (
    <Router>
				<div className='main-container'>
					
					<HeaderNav />

          <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/books' element={<Books />}></Route>
          </Routes>
          
          
          </div>
          </Router>
  );
}

export default App;
