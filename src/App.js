import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HeaderNav from './components/HeaderNav/HeaderNav'
import Footer from './components/Footer';

import './app.css';
import './components/HeaderNav/HeaderNav'
import Landing from './components/Landing/Landing';
import Books from './components/Books/Books';
import Data from './components/Data/Data';
import Updates from './components/Updates/Updates';
import Blog from './components/Blog/Blog';

const App =() => {
  return (
    <Router>
				<Fragment>
					
					<HeaderNav />

          <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/books' element={<Books />}></Route>
          <Route path='/data' element={<Data />}></Route>
          <Route path='/updates' element={<Updates />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          </Routes>
          <Footer />
          
          
          </Fragment>
          </Router>
  );
}

export default App;
