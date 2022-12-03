import React from 'react'

import IndividualBook from './IndividualBook';
import './books.css';
import books from './bookData/bookData';

const Books = () => {
  return (
    <div className="books-container">
      <div className="books-overlay">
        <div className="books-inner">
      <div className="books-intro-container pt2">
        <p className='books-intro pt2 t-medium'>Welcome to my Library. One of my goals is to read 50 books throught this year. Every book will have a few comments from me and two ratings. The first, xxxx, will be what I thought about the overall quality of the book. The second, xxxxx, will be how I felt about the dryness or technical difficulty of the material matter as it is presented. These are just my opinions though! If you click on the book's picture it will bring you to it's Amazon page and you can read lots of reviews there!</p>
      </div>
      
      {books.map((book, index) => {

        return <IndividualBook book={book}/>
      })}
    </div>
    </div>
    </div>
  )
}

export default Books